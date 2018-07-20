import { importSchema } from 'graphql-import';
import * as path from 'path';
import * as fs from 'fs';
import { printSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';

const compiledSchemaPath = path.resolve('build/schema-compiled.graphql');

function generateSchema() {
  const typeDefs = importSchema(path.resolve('src/schema.graphql'));
  const resolvers = {};

  const schema = makeExecutableSchema({ typeDefs, resolvers });
  return printSchema(schema);
}

export function typeDefs() {
  // In production we precompile the schema for two reasons;
  // - Due to our use of yarn workspaces the node_modules graphql-authentication import gets broken
  // - Running our schema during compile time so it can fail early
  // Do note: I don't know yet if this is a good idea...
  if (process.env.NODE_ENV === 'production') {
    return fs.readFileSync(compiledSchemaPath, 'utf8');
  }
  return generateSchema();
}

// This file can also be called from the CLI; it will generate the schema for production
if (require.main === module) {
  const schema = generateSchema();
  fs.writeFileSync(compiledSchemaPath, schema, 'utf8');
}
