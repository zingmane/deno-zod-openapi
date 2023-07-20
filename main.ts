import { extendZodWithOpenApi, generateSchema } from "zod-openapi";
import { z } from "zod";

extendZodWithOpenApi(z);

const zodSchema = z.object({
  name: z.string(),
  age: z.number(),
});

const openApiSchema = generateSchema(zodSchema);

console.log(
  `openApiSchema: ${JSON.stringify(openApiSchema, null, 2)}`,
);
