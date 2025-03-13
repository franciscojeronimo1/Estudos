export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="bg-orange-500 text-white p-4">
          <h1 className="text-2xl font-bold">Receitas Deliciosas</h1>
        </header>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}