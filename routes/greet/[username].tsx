import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const { username } = ctx.params;
    const resp = await fetch(`https://api.github.com/users/${username}`);
    const user = await resp.json();
    return ctx.render(user);
  },
};

export default function Greet({ data }: PageProps) {
  if (!data) {
    return <h1>No data</h1>;
  }

  return (
    <div>
      <img src={data.avatar_url} />
    </div>
  );
}
