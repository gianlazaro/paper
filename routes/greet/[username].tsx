import { Handlers, RouteContext } from "$fresh/server.ts";

export const handler: Handlers = {
  async POST(_req, ctx) {
    const form = await _req.formData();
    const email = form.get("email");

    const headers = new Headers();
    headers.set("location", "/thanks");
    return new Response(null, {
      status: 303,
      headers,
    });
  },
};

export default async function Greet(_req: Request, ctx: RouteContext) {
  const { username } = ctx.params;
  const resp = await fetch(`https://api.github.com/users/${username}`);
  const user = await resp.json();
  if (!user) {
    return <h1>No data</h1>;
  }

  return (
    <div class="container mx-auto">
      <form method="post">
        <label for="email">Email:&nbsp;</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Type your email here"
        >
          <input type="submit" />
        </input>
      </form>
      <img src={user.avatar_url} />
      <h1 class="text-2xl">{user.name}</h1>
      <h2 class="text-xl">#{user.id}</h2>
      <br />
      <code class="break-all">{JSON.stringify(user)}</code>
    </div>
  );
}
