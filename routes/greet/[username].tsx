import { RouteContext } from "$fresh/server.ts";

export default async function Greet(_req: Request, ctx: RouteContext) {
  const { username } = ctx.params;
  const resp = await fetch(`https://api.github.com/users/${username}`);
  const user = await resp.json();
  if (!user) {
    return <h1>No data</h1>;
  }

  return (
    <div class="container mx-auto">
      <img src={user.avatar_url} />
      <h1 class="text-2xl">{user.name}</h1>
      <h2 class="text-xl">#{user.id}</h2>
      <br />
      <code class="break-all">{JSON.stringify(user)}</code>
    </div>
  );
}
