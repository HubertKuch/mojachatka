import Navigation from "./Navigation";

export default function Layout({ children }: { children: any }): JSX.Element {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Mojachatka - Panel</title>
        <link rel="stylesheet" href="/static/style/output.css" />
        <link rel="stylesheet" hre="/static/style/main.css" />
      </head>
      <body className="w-full h-full flex">
        <Navigation />
        <main className={"w-10/12"}>{children}</main>
      </body>
    </html>
  );
}
