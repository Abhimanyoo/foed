import { importSchema } from 'graphql-import';
import * as path from 'path';
import * as fs from 'fs';
import { printSchema } from 'graphql';
import { makeExecutableSchema, IResolvers } from 'graphql-tools';

const compiledSchemaPath = path.resolve('build/schema-compiled.graphql');

function generateSchema(resolvers: IResolvers = {}) {
  const typeDefs = importSchema(path.resolve('src/schema.graphql'));
  return makeExecutableSchema({ typeDefs, resolvers });
}

export function getSchema(resolvers: IResolvers = {}) {
  // In production we precompile the schema for two reasons;
  // - Due to our use of yarn workspaces the node_modules graphql-authentication import gets broken
  // - Running our schema during compile time so it can fail early
  // Do note: I don't know yet if this is a good idea...
  if (process.env.NODE_ENV === 'production') {
    const typeDefs = fs.readFileSync(compiledSchemaPath, 'utf8');
    return makeExecutableSchema({ typeDefs, resolvers });
  }
  return generateSchema(resolvers);
}

// This file can also be called from the CLI; it will generate the schema for production
if (require.main === module) {
  const schema = printSchema(generateSchema());
  fs.writeFileSync(compiledSchemaPath, schema, 'utf8');
}
