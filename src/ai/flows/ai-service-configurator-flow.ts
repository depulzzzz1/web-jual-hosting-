'use server';
/**
 * @fileOverview An AI agent that recommends hosting plans or VPS configurations based on project needs.
 *
 * - configureService - A function that handles the service configuration recommendation process.
 * - AiServiceConfiguratorInput - The input type for the configureService function.
 * - AiServiceConfiguratorOutput - The return type for the configureService function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiServiceConfiguratorInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('A detailed description of the user\u0027s project, including expected traffic, required technologies, and budget.'),
});
export type AiServiceConfiguratorInput = z.infer<typeof AiServiceConfiguratorInputSchema>;

const AiServiceConfiguratorOutputSchema = z.object({
  recommendationType: z
    .enum([
      'shared_hosting',
      'business_hosting',
      'cloud_hosting',
      'wordpress_hosting',
      'vps_hosting',
      'dedicated_server',
      'game_hosting',
      'reseller_hosting',
    ])
    .describe('The most suitable hosting or VPS category for the project.'),
  planName: z
    .string()
    .describe('A suggested plan name if applicable (e.g., \"Basic Shared\", \"Pro VPS\").')
    .optional(),
  description: z
    .string()
    .describe('A detailed explanation of why this recommendation is suitable for the project.'),
  keyFeatures: z
    .array(z.string())
    .describe('Key features or specifications of the recommended service.')
    .optional(),
  cpuCores: z
    .number()
    .describe('Recommended number of CPU cores for VPS/Dedicated.')
    .optional(),
  ramGb: z.number().describe('Recommended RAM in GB for VPS/Dedicated.').optional(),
  storageGb: z
    .number()
    .describe('Recommended storage in GB (e.g., SSD/NVMe) for VPS/Dedicated.')
    .optional(),
  bandwidthTb: z
    .number()
    .describe('Recommended monthly bandwidth in TB for VPS/Dedicated.')
    .optional(),
  operatingSystem: z
    .string()
    .describe('Recommended operating system for VPS/Dedicated (e.g., Ubuntu, CentOS, Windows Server).')
    .optional(),
});
export type AiServiceConfiguratorOutput = z.infer<typeof AiServiceConfiguratorOutputSchema>;

export async function configureService(input: AiServiceConfiguratorInput): Promise<AiServiceConfiguratorOutput> {
  return aiServiceConfiguratorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiServiceConfiguratorPrompt',
  input: {schema: AiServiceConfiguratorInputSchema},
  output: {schema: AiServiceConfiguratorOutputSchema},
  prompt: `You are an expert cloud infrastructure and hosting service configurator for DEP HOST GLOBAL. Your goal is to recommend the most suitable hosting plan or VPS configuration based on the user's project description.

Here are the available service categories and their general use cases:

- **shared_hosting**: Best for small websites, personal blogs, low traffic sites, and users on a tight budget. Limited resources and control.
- **business_hosting**: Optimized for business websites, e-commerce stores, and growing online presences. Offers better performance, security, and dedicated resources than shared hosting.
- **cloud_hosting**: Ideal for applications requiring high scalability, flexibility, and high availability. Suitable for unpredictable traffic spikes or complex setups. Pay-as-you-go model.
- **wordpress_hosting**: Specifically optimized for WordPress websites. Includes pre-installed WordPress, managed updates, and performance tuning for WP.
- **vps_hosting**: Provides dedicated virtualized resources, root access, and more control. Suitable for custom software, specific configurations, moderate to high traffic, and developers.
- **dedicated_server**: Offers maximum performance, control, and security with an entire physical server dedicated to one user. Best for very high traffic, critical applications, and strict compliance needs.
- **game_hosting**: Specialized for hosting game servers, focusing on low latency, high performance, and specific software requirements for gaming applications.
- **reseller_hosting**: Allows users to host multiple client websites under their own brand. Ideal for web designers, developers, or agencies.

When recommending a 'vps_hosting' or 'dedicated_server', please include specific technical details such as 'cpuCores', 'ramGb', 'storageGb', 'bandwidthTb', and 'operatingSystem'. For other hosting types, focus on 'planName' and 'keyFeatures'.

User's Project Description: {{{projectDescription}}}

Based on the project description, recommend the most suitable service category and provide detailed reasoning.`,
});

const aiServiceConfiguratorFlow = ai.defineFlow(
  {
    name: 'aiServiceConfiguratorFlow',
    inputSchema: AiServiceConfiguratorInputSchema,
    outputSchema: AiServiceConfiguratorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
