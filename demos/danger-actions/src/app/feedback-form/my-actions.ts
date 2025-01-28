"use server";

import { z } from "zod";

const myFormActionSchema = z.object({
  email: z.string().min(5, "Epost må være minst 5 tegn"),
  message: z.string().min(10, "Melding må være minst 10 tegn"),
});

type SubmitMyFormResult =
  | { success: boolean }
  | {
      errors: z.inferFlattenedErrors<typeof myFormActionSchema>["fieldErrors"];
    };

export async function submitMyForm(
  _: unknown,
  formData: FormData,
): Promise<SubmitMyFormResult> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const validatedFields = myFormActionSchema.safeParse({
    email: formData.get("email"),
    message: formData.get("message"),
  });

  console.log("Yooooooo!");

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  console.log(
    `Form submitted with: ${JSON.stringify(validatedFields, null, 2)}`,
  );

  return { success: true };
}

export async function myGenericAction(a: string, b: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.info(`Fikk ${a} og ${b} i server action`);

  return `${a} ${b}! (${Math.random()})`;
}
