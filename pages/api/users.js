// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  //Se o metodo for get, de essa resposta
  if (req.method === "GET") {
    res
      .status(200)
      .json([
        {
          id: 1,
          name: "lucas",
          telefone: "65996635843",
          vencimento: "11/02/2022",
          total: "R$ 350,00",
          endereco: "Av. Tranquedo Neves",
        },
        {
          id: 2,
          name: "lucas",
          telefone: "65996635843",
          vencimento: "11/02/2022",
          total: "R$ 350,00",
          endereco: "Av. Tranquedo Neves",
        },
        {
          id: 3,
          name: "lucas",
          telefone: "65996635843",
          vencimento: "11/02/2022",
          total: "R$ 350,00",
          endereco: "Av. Tranquedo Neves",
        },
      ]);
  } else {
    res.status(405).end("method not allowe");
  }
}
