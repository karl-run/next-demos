export async function GET(request: Request): Promise<Response> {
  const waitParam = new URL(request.url).searchParams.get("wait");
  const waitTime = waitParam ? +waitParam : 1000;

  await new Promise((resolve) =>
    setTimeout(resolve, waitTime ? +waitTime : 1000),
  );

  return Response.json({
    message: `Hei fra serveren! Vi ventet i ${waitTime}ms`,
  });
}
