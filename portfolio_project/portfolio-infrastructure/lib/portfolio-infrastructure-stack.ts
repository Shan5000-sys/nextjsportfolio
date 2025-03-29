import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as amplify from '@aws-cdk/aws-amplify-alpha';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';

export class PortfolioInfrastructureStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const amplifyApp = new amplify.App(this, 'PortfolioApplication', {
      appName: 'Portfolio',
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: 'Shan5000-sys',
        repository: 'nextjsportfolio',
        oauthToken: cdk.SecretValue.secretsManager('github-token'),
      }),
      buildSpec: codebuild.BuildSpec.fromObjectToYaml({
        version: '1.0',
        frontend: {
          phases: {
            preBuild: {
              commands: [
                'echo "starting this build"',
                'npm install',
              ],
            },
            build: {
              commands: [
                'echo "building out nextjs app..."',
                'npm run build',
                'echo "build is completed"',
              ],
            },
          },
        },
      }),
    });

    amplifyApp.addBranch('main', {
      autoBuild: true,
    });
  }
}