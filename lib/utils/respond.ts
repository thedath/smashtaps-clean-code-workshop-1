export default function (
  status: 200 | 403 | 404 | 500,
  type: "error" | "success",
  message: string = "",
  data: any = {}
) {
  return {
    statusCode: status,
    body: JSON.stringify({
      response: {
        type,
        message,
        data,
      },
    }),
  };
}
