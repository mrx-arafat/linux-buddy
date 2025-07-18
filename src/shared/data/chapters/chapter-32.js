export const chapter32 = {
  id: '32',
  icon: '🔨',
  title: 'SST',
  description: 'Serverless Stack Toolkit',
  slug: 'sst',
  content: {
    overview: 'Welcome to SST - the Serverless Stack Toolkit that makes building serverless applications feel like magic! 🔨 If you\'ve ever wanted to build scalable, cloud-native applications without managing servers, SST is your secret weapon. SST combines the power of AWS with the simplicity of modern development tools, giving you Infrastructure as Code that actually makes sense. We\'re going to transform you from someone who struggles with complex cloud configurations to a serverless architect who can deploy full-stack applications with a single command! 🚀',
    sections: [
      {
        title: '1. SST Fundamentals - Serverless Made Simple 🌩️',
        content: 'SST fundamentals introduce you to modern serverless development. SST is built on top of AWS CDK and provides a developer-friendly way to build serverless applications with features like Live Lambda Development and type-safe infrastructure.',
        codeExample: `# === SST FUNDAMENTALS ===
echo "🌩️ SST Fundamentals - Serverless Made Simple"

# === WHAT IS SST? ===
echo "🔨 WHAT IS SST?"
echo "SST (Serverless Stack Toolkit) is a framework for building serverless apps:"
echo "✅ Built on AWS CDK (Cloud Development Kit)"
echo "✅ Type-safe infrastructure as code"
echo "✅ Live Lambda Development"
echo "✅ Full-stack serverless applications"
echo "✅ Modern developer experience"
echo "✅ Automatic deployments"

# === SST ARCHITECTURE ===
echo "🏗️ SST ARCHITECTURE:"
echo ""
echo "Frontend:"
echo "• React, Vue, Svelte, or static sites"
echo "• Deployed to CloudFront CDN"
echo "• Automatic HTTPS and custom domains"
echo ""
echo "Backend:"
echo "• AWS Lambda functions"
echo "• API Gateway for REST/GraphQL APIs"
echo "• WebSocket APIs for real-time features"
echo ""
echo "Database:"
echo "• DynamoDB for NoSQL"
echo "• RDS for relational databases"
echo "• S3 for file storage"
echo ""
echo "Infrastructure:"
echo "• AWS CDK constructs"
echo "• TypeScript/JavaScript configuration"
echo "• Automatic resource management"

# === SST BENEFITS ===
echo "🌟 SST BENEFITS:"
echo ""
echo "For Developers:"
echo "✅ Live Lambda Development (test locally)"
echo "✅ Type-safe infrastructure"
echo "✅ Hot reloading for serverless functions"
echo "✅ Integrated debugging"
echo "✅ Automatic environment management"
echo ""
echo "For Operations:"
echo "✅ Infrastructure as Code"
echo "✅ Automatic scaling"
echo "✅ Pay-per-use pricing"
echo "✅ Built-in monitoring"
echo "✅ Easy rollbacks"

# === INSTALLATION ===
echo "📦 SST INSTALLATION:"
echo ""
echo "# Install SST CLI globally"
echo "npm install -g @serverless-stack/cli"
echo ""
echo "# Or use with npx"
echo "npx create-sst@latest my-app"
echo ""
echo "# Verify installation"
echo "sst --version"

# === CREATING YOUR FIRST SST APP ===
echo "🚀 CREATING YOUR FIRST SST APP:"
echo ""
echo "# Create new SST app"
echo "npx create-sst@latest my-sst-app"
echo "cd my-sst-app"
echo ""
echo "# Available templates:"
echo "• minimal - Basic SST app"
echo "• typescript - TypeScript starter"
echo "• react - React frontend + API"
echo "• nextjs - Next.js full-stack"
echo "• graphql - GraphQL API"
echo "• rest-api - REST API"

# === SST PROJECT STRUCTURE ===
echo "📁 SST PROJECT STRUCTURE:"
echo ""
echo "my-sst-app/"
echo "├── sst.config.ts          # SST configuration"
echo "├── stacks/                # Infrastructure stacks"
echo "│   ├── MyStack.ts"
echo "│   └── index.ts"
echo "├── packages/"
echo "│   ├── functions/         # Lambda functions"
echo "│   │   └── lambda.ts"
echo "│   └── frontend/          # Frontend code"
echo "│       └── src/"
echo "├── package.json"
echo "└── tsconfig.json"

# === BASIC SST CONFIGURATION ===
echo "⚙️ BASIC SST CONFIGURATION:"
echo ""
echo "# sst.config.ts"
echo "import { SSTConfig } from 'sst'"
echo "import { MyStack } from './stacks/MyStack'"
echo ""
echo "export default {"
echo "  config(_input) {"
echo "    return {"
echo "      name: 'my-sst-app',"
echo "      region: 'us-east-1',"
echo "    }"
echo "  },"
echo "  stacks(app) {"
echo "    app.stack(MyStack)"
echo "  },"
echo "} satisfies SSTConfig"

# === BASIC COMMANDS ===
echo "⚡ BASIC SST COMMANDS:"
echo ""
echo "# Start development environment"
echo "sst dev"
echo ""
echo "# Deploy to AWS"
echo "sst deploy"
echo ""
echo "# Remove all resources"
echo "sst remove"
echo ""
echo "# View app info"
echo "sst list"
echo ""
echo "# View logs"
echo "sst logs"
echo ""
echo "# Open SST Console"
echo "sst console"

# === LIVE LAMBDA DEVELOPMENT ===
echo "🔥 LIVE LAMBDA DEVELOPMENT:"
echo ""
echo "SST's killer feature - test Lambda functions locally:"
echo "1. Run 'sst dev' to start development mode"
echo "2. Your Lambda functions run locally"
echo "3. Changes are reflected instantly"
echo "4. Full debugging support"
echo "5. Real AWS resources for everything else"
echo ""
echo "Benefits:"
echo "• No deployment needed for testing"
echo "• Faster development cycle"
echo "• Real-time debugging"
echo "• Access to local environment"

echo ""
echo "🔨 SST FUNDAMENTALS COMPLETE!"
echo "You now understand the power of modern serverless development!"
echo "Next: Let's build some stacks! 🏗️"`
      },
      {
        title: '2. Building Stacks - Infrastructure as Code 🏗️',
        content: 'SST stacks define your cloud infrastructure using code. Built on AWS CDK, stacks provide type-safe, reusable infrastructure components that make building complex serverless applications straightforward.',
        codeExample: `# === BUILDING STACKS ===
echo "🏗️ Building Stacks - Infrastructure as Code"

# === WHAT ARE STACKS? ===
echo "📚 WHAT ARE SST STACKS?"
echo "Stacks are collections of AWS resources:"
echo "✅ Infrastructure as Code"
echo "✅ Type-safe with TypeScript"
echo "✅ Reusable components"
echo "✅ Built on AWS CDK"
echo "✅ Automatic dependency management"

# === BASIC STACK EXAMPLE ===
echo "🏗️ BASIC STACK EXAMPLE:"
echo ""
echo "# stacks/MyStack.ts"
echo "import { StackContext, Api, StaticSite } from 'sst/constructs'"
echo ""
echo "export function MyStack({ stack }: StackContext) {"
echo "  // Create API"
echo "  const api = new Api(stack, 'Api', {"
echo "    routes: {"
echo "      'GET /': 'packages/functions/lambda.handler',"
echo "      'GET /hello': 'packages/functions/hello.handler',"
echo "    },"
echo "  })"
echo ""
echo "  // Create frontend"
echo "  const site = new StaticSite(stack, 'Site', {"
echo "    path: 'packages/frontend',"
echo "    buildOutput: 'dist',"
echo "    buildCommand: 'npm run build',"
echo "    environment: {"
echo "      VITE_API_URL: api.url,"
echo "    },"
echo "  })"
echo ""
echo "  // Output URLs"
echo "  stack.addOutputs({"
echo "    ApiEndpoint: api.url,"
echo "    SiteUrl: site.url,"
echo "  })"
echo "}"

# === SST CONSTRUCTS ===
echo "🧩 SST CONSTRUCTS:"
echo ""
echo "API Constructs:"
echo "• Api - REST API with Lambda functions"
echo "• GraphQLApi - GraphQL API"
echo "• WebSocketApi - Real-time WebSocket API"
echo ""
echo "Frontend Constructs:"
echo "• StaticSite - Static websites"
echo "• NextjsSite - Next.js applications"
echo "• RemixSite - Remix applications"
echo "• SvelteKitSite - SvelteKit applications"
echo ""
echo "Database Constructs:"
echo "• Table - DynamoDB tables"
echo "• RDS - Relational databases"
echo "• Bucket - S3 storage"
echo ""
echo "Other Constructs:"
echo "• Function - Lambda functions"
echo "• Cron - Scheduled tasks"
echo "• Queue - SQS queues"
echo "• Topic - SNS topics"

# === API STACK EXAMPLE ===
echo "🌐 API STACK EXAMPLE:"
echo ""
echo "# stacks/ApiStack.ts"
echo "import { StackContext, Api, Table } from 'sst/constructs'"
echo ""
echo "export function ApiStack({ stack }: StackContext) {"
echo "  // Create DynamoDB table"
echo "  const table = new Table(stack, 'Users', {"
echo "    fields: {"
echo "      userId: 'string',"
echo "      email: 'string',"
echo "    },"
echo "    primaryIndex: { partitionKey: 'userId' },"
echo "    globalIndexes: {"
echo "      emailIndex: { partitionKey: 'email' },"
echo "    },"
echo "  })"
echo ""
echo "  // Create API with table access"
echo "  const api = new Api(stack, 'Api', {"
echo "    defaults: {"
echo "      function: {"
echo "        bind: [table],"
echo "        environment: {"
echo "          TABLE_NAME: table.tableName,"
echo "        },"
echo "      },"
echo "    },"
echo "    routes: {"
echo "      'GET /users': 'packages/functions/users/list.handler',"
echo "      'POST /users': 'packages/functions/users/create.handler',"
echo "      'GET /users/{id}': 'packages/functions/users/get.handler',"
echo "      'PUT /users/{id}': 'packages/functions/users/update.handler',"
echo "      'DELETE /users/{id}': 'packages/functions/users/delete.handler',"
echo "    },"
echo "  })"
echo ""
echo "  return { api, table }"
echo "}"

# === LAMBDA FUNCTION EXAMPLE ===
echo "⚡ LAMBDA FUNCTION EXAMPLE:"
echo ""
echo "# packages/functions/users/create.ts"
echo "import { APIGatewayProxyHandlerV2 } from 'aws-lambda'"
echo "import { DynamoDBClient } from '@aws-sdk/client-dynamodb'"
echo "import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb'"
echo ""
echo "const client = new DynamoDBClient({})"
echo "const docClient = DynamoDBDocumentClient.from(client)"
echo ""
echo "export const handler: APIGatewayProxyHandlerV2 = async (event) => {"
echo "  try {"
echo "    const body = JSON.parse(event.body || '{}')"
echo "    "
echo "    const user = {"
echo "      userId: crypto.randomUUID(),"
echo "      email: body.email,"
echo "      name: body.name,"
echo "      createdAt: new Date().toISOString(),"
echo "    }"
echo ""
echo "    await docClient.send(new PutCommand({"
echo "      TableName: process.env.TABLE_NAME,"
echo "      Item: user,"
echo "    }))"
echo ""
echo "    return {"
echo "      statusCode: 201,"
echo "      body: JSON.stringify(user),"
echo "    }"
echo "  } catch (error) {"
echo "    return {"
echo "      statusCode: 500,"
echo "      body: JSON.stringify({ error: 'Internal server error' }),"
echo "    }"
echo "  }"
echo "}"

# === ENVIRONMENT MANAGEMENT ===
echo "🌍 ENVIRONMENT MANAGEMENT:"
echo ""
echo "# Different environments"
echo "sst dev                    # Development"
echo "sst deploy --stage prod    # Production"
echo "sst deploy --stage staging # Staging"
echo ""
echo "# Environment-specific config"
echo "export function MyStack({ stack, app }: StackContext) {"
echo "  const isProd = app.stage === 'prod'"
echo "  "
echo "  const api = new Api(stack, 'Api', {"
echo "    customDomain: isProd ? 'api.myapp.com' : undefined,"
echo "    routes: { /* ... */ },"
echo "  })"
echo "}"

echo ""
echo "🏗️ BUILDING STACKS COMPLETE!"
echo "You can now define infrastructure as code!"
echo "Next: Full-stack applications! 🌐"`
      },
      {
        title: '3. Full-Stack Applications - Frontend + Backend 🌐',
        content: 'SST excels at building full-stack serverless applications. You can easily connect React, Vue, or any frontend framework with serverless APIs, databases, and real-time features.',
        codeExample: `# === FULL-STACK APPLICATIONS ===
echo "🌐 Full-Stack Applications - Frontend + Backend"

# === REACT + SST EXAMPLE ===
echo "⚛️ REACT + SST EXAMPLE:"
echo ""
echo "# Create React SST app"
echo "npx create-sst@latest my-react-app --template react"
echo ""
echo "# Project structure"
echo "my-react-app/"
echo "├── sst.config.ts"
echo "├── stacks/"
echo "│   └── MyStack.ts"
echo "├── packages/"
echo "│   ├── functions/"
echo "│   │   └── lambda.ts"
echo "│   └── frontend/"
echo "│       ├── src/"
echo "│       ├── package.json"
echo "│       └── vite.config.ts"

# === FULL-STACK STACK DEFINITION ===
echo "🏗️ FULL-STACK STACK DEFINITION:"
echo ""
echo "# stacks/MyStack.ts"
echo "import { StackContext, Api, ReactSite, Table } from 'sst/constructs'"
echo ""
echo "export function MyStack({ stack }: StackContext) {"
echo "  // Database"
echo "  const table = new Table(stack, 'Notes', {"
echo "    fields: {"
echo "      noteId: 'string',"
echo "      userId: 'string',"
echo "    },"
echo "    primaryIndex: { partitionKey: 'noteId' },"
echo "  })"
echo ""
echo "  // API"
echo "  const api = new Api(stack, 'Api', {"
echo "    defaults: {"
echo "      function: { bind: [table] },"
echo "    },"
echo "    routes: {"
echo "      'GET /notes': 'packages/functions/notes/list.handler',"
echo "      'POST /notes': 'packages/functions/notes/create.handler',"
echo "      'GET /notes/{id}': 'packages/functions/notes/get.handler',"
echo "      'PUT /notes/{id}': 'packages/functions/notes/update.handler',"
echo "      'DELETE /notes/{id}': 'packages/functions/notes/delete.handler',"
echo "    },"
echo "  })"
echo ""
echo "  // Frontend"
echo "  const site = new ReactSite(stack, 'Site', {"
echo "    path: 'packages/frontend',"
echo "    environment: {"
echo "      VITE_API_URL: api.url,"
echo "    },"
echo "  })"
echo ""
echo "  stack.addOutputs({"
echo "    ApiEndpoint: api.url,"
echo "    SiteUrl: site.url,"
echo "  })"
echo "}"

# === FRONTEND INTEGRATION ===
echo "🎨 FRONTEND INTEGRATION:"
echo ""
echo "# packages/frontend/src/api.ts"
echo "const API_URL = import.meta.env.VITE_API_URL"
echo ""
echo "export const api = {"
echo "  async getNotes() {"
echo "    const response = await fetch(API_URL + '/notes')"
echo "    return response.json()"
echo "  },"
echo ""
echo "  async createNote(note: { title: string; content: string }) {"
echo "    const response = await fetch(API_URL + '/notes', {"
echo "      method: 'POST',"
echo "      headers: { 'Content-Type': 'application/json' },"
echo "      body: JSON.stringify(note),"
echo "    })"
echo "    return response.json()"
echo "  },"
echo ""
echo "  async deleteNote(id: string) {"
echo "    await fetch(API_URL + '/notes/' + id, {"
echo "      method: 'DELETE',"
echo "    })"
echo "  },"
echo "}"

# === REAL-TIME FEATURES ===
echo "⚡ REAL-TIME FEATURES WITH WEBSOCKETS:"
echo ""
echo "# Add WebSocket API to stack"
echo "const wsApi = new WebSocketApi(stack, 'WebSocketApi', {"
echo "  routes: {"
echo "    '\\$connect': 'packages/functions/websocket/connect.handler',"
echo "    '\\$disconnect': 'packages/functions/websocket/disconnect.handler',"
echo "    'sendMessage': 'packages/functions/websocket/sendMessage.handler',"
echo "  },"
echo "})"
echo ""
echo "# WebSocket handler example"
echo "# packages/functions/websocket/sendMessage.ts"
echo "import { APIGatewayProxyWebsocketHandlerV2 } from 'aws-lambda'"
echo "import { ApiGatewayManagementApiClient, PostToConnectionCommand } from '@aws-sdk/client-apigatewaymanagementapi'"
echo ""
echo "export const handler: APIGatewayProxyWebsocketHandlerV2 = async (event) => {"
echo "  const client = new ApiGatewayManagementApiClient({"
echo "    endpoint: 'https://' + event.requestContext.domainName + '/' + event.requestContext.stage,"
echo "  })"
echo ""
echo "  const message = JSON.parse(event.body || '{}')"
echo "  "
echo "  // Broadcast to all connections"
echo "  await client.send(new PostToConnectionCommand({"
echo "    ConnectionId: event.requestContext.connectionId,"
echo "    Data: JSON.stringify({ type: 'message', data: message }),"
echo "  }))"
echo ""
echo "  return { statusCode: 200 }"
echo "}"

# === AUTHENTICATION ===
echo "🔐 AUTHENTICATION WITH COGNITO:"
echo ""
echo "# Add authentication to stack"
echo "import { Auth } from 'sst/constructs'"
echo ""
echo "const auth = new Auth(stack, 'Auth', {"
echo "  authenticator: {"
echo "    handler: 'packages/functions/auth.handler',"
echo "  },"
echo "})"
echo ""
echo "# Protect API routes"
echo "const api = new Api(stack, 'Api', {"
echo "  defaults: {"
echo "    authorizer: 'iam',"
echo "    function: { bind: [table] },"
echo "  },"
echo "  routes: {"
echo "    'GET /notes': 'packages/functions/notes/list.handler',"
echo "    // ... other routes"
echo "  },"
echo "})"
echo ""
echo "auth.attach(stack, { api })"

# === DEPLOYMENT STRATEGIES ===
echo "🚀 DEPLOYMENT STRATEGIES:"
echo ""
echo "# Development"
echo "sst dev                    # Local development"
echo ""
echo "# Staging"
echo "sst deploy --stage staging"
echo ""
echo "# Production"
echo "sst deploy --stage prod"
echo ""
echo "# Custom domain for production"
echo "const site = new ReactSite(stack, 'Site', {"
echo "  path: 'packages/frontend',"
echo "  customDomain: app.stage === 'prod' ? 'myapp.com' : undefined,"
echo "  environment: {"
echo "    VITE_API_URL: api.url,"
echo "  },"
echo "})"

echo ""
echo "🌐 FULL-STACK APPLICATIONS COMPLETE!"
echo "You can now build complete serverless applications!"
echo "Next: Advanced SST patterns! 🚀"`
      },
      {
        title: '4. Advanced SST - Production Patterns 🚀',
        content: 'Advanced SST patterns help you build production-ready serverless applications. This includes monitoring, testing, CI/CD integration, and advanced architectural patterns for scalable applications.',
        codeExample: `# === ADVANCED SST ===
echo "🚀 Advanced SST - Production Patterns"

# === MONITORING AND OBSERVABILITY ===
echo "📊 MONITORING AND OBSERVABILITY:"
echo ""
echo "# Built-in monitoring with SST Console"
echo "sst console"
echo ""
echo "# Custom monitoring stack"
echo "import { Function, Topic } from 'sst/constructs'"
echo ""
echo "const errorTopic = new Topic(stack, 'ErrorTopic', {"
echo "  subscribers: {"
echo "    email: 'admin@myapp.com',"
echo "  },"
echo "})"
echo ""
echo "const api = new Api(stack, 'Api', {"
echo "  defaults: {"
echo "    function: {"
echo "      onError: errorTopic,"
echo "      environment: {"
echo "        LOG_LEVEL: 'info',"
echo "      },"
echo "    },"
echo "  },"
echo "  routes: { /* ... */ },"
echo "})"

# === TESTING STRATEGIES ===
echo "🧪 TESTING STRATEGIES:"
echo ""
echo "# Unit tests for functions"
echo "# packages/functions/tests/notes.test.ts"
echo "import { handler } from '../notes/create'"
echo "import { APIGatewayProxyEventV2 } from 'aws-lambda'"
echo ""
echo "describe('Notes API', () => {"
echo "  test('creates a note', async () => {"
echo "    const event = {"
echo "      body: JSON.stringify({"
echo "        title: 'Test Note',"
echo "        content: 'Test content',"
echo "      }),"
echo "    } as APIGatewayProxyEventV2"
echo ""
echo "    const result = await handler(event)"
echo "    expect(result.statusCode).toBe(201)"
echo "  })"
echo "})"
echo ""
echo "# Integration tests"
echo "npm run test"

# === CI/CD INTEGRATION ===
echo "🔄 CI/CD INTEGRATION:"
echo ""
echo "# GitHub Actions example"
echo "# .github/workflows/deploy.yml"
echo "name: Deploy"
echo "on:"
echo "  push:"
echo "    branches: [main]"
echo ""
echo "jobs:"
echo "  deploy:"
echo "    runs-on: ubuntu-latest"
echo "    steps:"
echo "      - uses: actions/checkout@v3"
echo "      - uses: actions/setup-node@v3"
echo "        with:"
echo "          node-version: 18"
echo ""
echo "      - name: Install dependencies"
echo "        run: npm ci"
echo ""
echo "      - name: Run tests"
echo "        run: npm test"
echo ""
echo "      - name: Deploy to staging"
echo "        run: npx sst deploy --stage staging"
echo "        env:"
echo "          AWS_ACCESS_KEY_ID: \\$AWS_ACCESS_KEY_ID"
echo "          AWS_SECRET_ACCESS_KEY: \\$AWS_SECRET_ACCESS_KEY"
echo ""
echo "      - name: Deploy to production"
echo "        if: github.ref == 'refs/heads/main'"
echo "        run: npx sst deploy --stage prod"

# === SECRETS MANAGEMENT ===
echo "🔐 SECRETS MANAGEMENT:"
echo ""
echo "# Using SST Config for secrets"
echo "import { Config } from 'sst/constructs'"
echo ""
echo "const secret = new Config.Secret(stack, 'DATABASE_PASSWORD')"
echo ""
echo "const api = new Api(stack, 'Api', {"
echo "  defaults: {"
echo "    function: {"
echo "      bind: [secret],"
echo "    },"
echo "  },"
echo "  routes: { /* ... */ },"
echo "})"
echo ""
echo "# In Lambda function"
echo "import { Config } from 'sst/node/config'"
echo ""
echo "export const handler = async () => {"
echo "  const password = Config.DATABASE_PASSWORD"
echo "  // Use the secret"
echo "}"
echo ""
echo "# Set secret value"
echo "npx sst secrets set DATABASE_PASSWORD mypassword --stage prod"

# === ADVANCED PATTERNS ===
echo "🎯 ADVANCED PATTERNS:"
echo ""
echo "# Multi-stack architecture"
echo "export default {"
echo "  config(_input) {"
echo "    return {"
echo "      name: 'my-app',"
echo "      region: 'us-east-1',"
echo "    }"
echo "  },"
echo "  stacks(app) {"
echo "    app"
echo "      .stack(DatabaseStack)"
echo "      .stack(ApiStack)"
echo "      .stack(FrontendStack)"
echo "      .stack(MonitoringStack)"
echo "  },"
echo "} satisfies SSTConfig"
echo ""
echo "# Cross-stack references"
echo "export function ApiStack({ stack }: StackContext) {"
echo "  const { table } = use(DatabaseStack)"
echo "  "
echo "  const api = new Api(stack, 'Api', {"
echo "    defaults: { function: { bind: [table] } },"
echo "    routes: { /* ... */ },"
echo "  })"
echo "  "
echo "  return { api }"
echo "}"

# === PERFORMANCE OPTIMIZATION ===
echo "⚡ PERFORMANCE OPTIMIZATION:"
echo ""
echo "# Lambda function optimization"
echo "const api = new Api(stack, 'Api', {"
echo "  defaults: {"
echo "    function: {"
echo "      runtime: 'nodejs18.x',"
echo "      memorySize: 1024,"
echo "      timeout: 30,"
echo "      environment: {"
echo "        NODE_OPTIONS: '--enable-source-maps',"
echo "      },"
echo "    },"
echo "  },"
echo "  routes: { /* ... */ },"
echo "})"
echo ""
echo "# CDN optimization"
echo "const site = new ReactSite(stack, 'Site', {"
echo "  path: 'packages/frontend',"
echo "  buildCommand: 'npm run build',"
echo "  errorPage: 'redirect_to_index_page',"
echo "  cdk: {"
echo "    distribution: {"
echo "      defaultCacheBehavior: {"
echo "        compress: true,"
echo "        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,"
echo "      },"
echo "    },"
echo "  },"
echo "})"

# === COST OPTIMIZATION ===
echo "💰 COST OPTIMIZATION:"
echo ""
echo "# DynamoDB on-demand pricing"
echo "const table = new Table(stack, 'Users', {"
echo "  fields: { userId: 'string' },"
echo "  primaryIndex: { partitionKey: 'userId' },"
echo "  cdk: {"
echo "    table: {"
echo "      billingMode: BillingMode.ON_DEMAND,"
echo "    },"
echo "  },"
echo "})"
echo ""
echo "# Lambda provisioned concurrency for consistent performance"
echo "const api = new Api(stack, 'Api', {"
echo "  defaults: {"
echo "    function: {"
echo "      reservedConcurrentExecutions: 10,"
echo "    },"
    },"
echo "  },"
echo "  routes: { /* ... */ },"
echo "})"

# === SST MASTERY CHECKLIST ===
echo "🎯 SST MASTERY CHECKLIST:"
echo "========================="
echo "□ Understand serverless architecture"
echo "□ Build type-safe infrastructure"
echo "□ Create full-stack applications"
echo "□ Implement real-time features"
echo "□ Set up authentication"
echo "□ Configure monitoring"
echo "□ Write comprehensive tests"
echo "□ Set up CI/CD pipelines"
echo "□ Manage secrets securely"
echo "□ Optimize for performance and cost"

echo ""
echo "🎉 SST MASTERY COMPLETE!"
echo "========================"
echo "You now understand:"
echo "✅ SST fundamentals and architecture"
echo "✅ Infrastructure as Code with stacks"
echo "✅ Full-stack serverless applications"
echo "✅ Advanced production patterns"
echo "✅ Monitoring and observability"
echo "✅ Testing and CI/CD integration"
echo "✅ Security and secrets management"
echo ""
echo "🔨 You are now an SST MASTER!"
echo "Build serverless applications like a cloud architect! ☁️"
echo ""
echo "Remember: Serverless doesn't mean no servers,"
echo "it means no server management!"
echo "Use your SST mastery to build scalable, cost-effective applications! 🚀"`
      }
    ]
  }
}