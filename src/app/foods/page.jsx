import Image from 'next/image';
import Link from 'next/link';

const FoodsPage = async () => {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods');
    const foods = await res.json();
    const foodItems = foods.data ?? [];

    return (
        <main className="min-h-screen bg-[linear-gradient(180deg,_#fff8f1_0%,_#fffdf8_40%,_#fef3c7_100%)] px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
                <section className="rounded-[2rem] border border-amber-200/70 bg-white/85 p-6 shadow-[0_24px_70px_rgba(120,53,15,0.10)] backdrop-blur md:p-8">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                        <div className="max-w-3xl space-y-4">
                            <span className="inline-flex w-fit rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
                                Curated food gallery
                            </span>
                            <div className="space-y-3">
                                <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                                    Fresh picks from the food API, served in a clean card layout.
                                </h1>
                                <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                                    Browse dishes, burgers, biriyani, and beverages with quick details like rating,
                                    cuisine, price, and ingredients in one easy-to-scan view.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                            <div className="rounded-3xl bg-slate-950 p-5 text-white">
                                <p className="text-sm text-slate-300">Items</p>
                                <p className="mt-2 text-3xl font-semibold">{foodItems.length}</p>
                            </div>
                            <div className="rounded-3xl bg-amber-100 p-5">
                                <p className="text-sm text-amber-700">Top rating</p>
                                <p className="mt-2 text-3xl font-semibold text-amber-950">5.0</p>
                            </div>
                            <div className="rounded-3xl bg-orange-100 p-5 col-span-2 sm:col-span-1">
                                <p className="text-sm text-orange-700">Collection</p>
                                <p className="mt-2 text-lg font-semibold text-orange-950">API menu</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {foodItems.map((food) => (
                        <article
                            key={food.id}
                            className="group flex h-auto min-h-[46rem] flex-col overflow-hidden rounded-[2rem] border border-white/70 bg-white/90 shadow-[0_24px_60px_rgba(120,53,15,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(120,53,15,0.16)]"
                        >
                            <div className="relative h-64 min-h-64 overflow-hidden bg-amber-100">
                                <Image
                                    src={food.image_link}
                                    alt={food.dish_name}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                    className="object-cover transition duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                                    <span className="rounded-full bg-white/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700 backdrop-blur">
                                        {food.category}
                                    </span>
                                    <span className="rounded-full bg-slate-950/85 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                                        {food.rating} star
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-1 flex-col space-y-5 p-5">
                                <div className="space-y-2">
                                    <div className="flex items-start justify-between gap-4">
                                        <h2 className="min-h-14 text-xl font-semibold leading-7 text-slate-950">
                                            {food.dish_name}
                                        </h2>
                                        <span className="shrink-0 rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                                            BDT {food.price}
                                        </span>
                                    </div>
                                    <p className="min-h-12 text-sm leading-6 text-slate-600">
                                        {food.cuisine}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {food.alternative_names?.slice(0, 2).map((name) => (
                                        <span
                                            key={name}
                                            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                                        >
                                            {name}
                                        </span>
                                    ))}
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-2xl bg-amber-50 p-3">
                                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">
                                            Calories
                                        </p>
                                        <p className="mt-2 text-sm font-medium text-slate-800">
                                            {food.approximate_nutrition_per_serving?.calories}
                                        </p>
                                    </div>
                                    <div className="rounded-2xl bg-orange-50 p-3">
                                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
                                            Dhaka price
                                        </p>
                                        <p className="mt-2 text-sm font-medium text-slate-800">
                                            {food.possible_price_in_dhaka?.street_food_or_small_restaurant ||
                                                food.possible_price_in_dhaka?.street_food_or_small_cafe ||
                                                food.possible_price_in_dhaka?.cafe_or_fast_food_chain}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                                        Main ingredients
                                    </p>
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {food.main_ingredients?.slice(0, 4).map((ingredient) => (
                                            <span
                                                key={ingredient}
                                                className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600"
                                            >
                                                {ingredient}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto flex gap-3 pt-1">
                                    <button
                                        type="button"
                                        className="flex-1 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                                    >
                                        Add to Cart
                                    </button>
                                    <Link
                                        href={`/foods/${food.id}`}
                                        className="flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-amber-300 hover:bg-amber-50 hover:text-amber-800"
                                    >
                                        Show Details
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </section>
            </div>
        </main>
    );
};

export default FoodsPage;
