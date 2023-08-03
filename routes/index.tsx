import { Head } from "$fresh/runtime.ts";

export const handler = {
  async GET(_, ctx) {
    const resp = await fetch(`https://api.github.com/users/gianlazaro`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const user = await resp.json();
    return ctx.render(user);
  },
};

export default async function Home({ data }) {
  if (!data) {
    return <h1>User not found</h1>;
  }
  return (
    <>
      <Head>
        <title>Paper Church</title>
      </Head>
      <div class="px-4 py-8 mx-auto  border-b-1">
        <div class="container mx-auto">
          <h1 class="text-xl">Paper Church {data.name}</h1>
        </div>
      </div>
      <div class="container mx-auto h-96 flex items-center">
        <span class="text-2xl font-bold">
          Welcome to Paper Church: Where Faith Meets Community
        </span>
      </div>
    </>
  );
}
