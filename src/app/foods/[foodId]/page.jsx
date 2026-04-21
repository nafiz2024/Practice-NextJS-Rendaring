import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const FoodDetailPage = async ({ params }) => {
    const { foodId } = await params;

    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods');
    const foods = await res.json();
    const food = foods.data?.find((item) => item.id === foodId);

    if (!food) {
        notFound();
    }

    const nutrition = food.approximate_nutrition_per_serving ?? {};
    const priceInfo = food.possible_price_in_dhaka ?? {};

    return (
        <main className="min-h-screen bg-[linear-gradient(180deg,_#fff8f1_0%,_#fffdf8_42%,_#fde68a_100%)] px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
                <div className="flex items-center justify-between">
                    <Link
                        href="/foods"
                        className="inline-flex w-fit items-center rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-amber-300 hover:bg-amber-50 hover:text-amber-800"
                    >
                        Back to foods
                    </Link>
                    <span className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">
                        {food.rating} star rating
                    </span>
                </div>

                <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 shadow-[0_24px_70px_rgba(120,53,15,0.12)] backdrop-blur">
                        <div className="relative h-[22rem] w-full sm:h-[28rem] lg:h-full lg:min-h-[34rem]">
                            <Image
                                src={food.image_link}
                                alt={food.dish_name}
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 55vw"
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 rounded-[2rem] border border-amber-200/70 bg-white/85 p-6 shadow-[0_24px_70px_rgba(120,53,15,0.12)] backdrop-blur md:p-8">
                        <div className="space-y-4">
                            <span className="inline-flex w-fit rounded-full bg-amber-100 px-3 py-1 text-sm font-medium uppercase tracking-[0.18em] text-amber-800">
                                {food.category}
                            </span>
                            <div className="space-y-3">
                                <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                                    {food.dish_name}
                                </h1>
                                <p className="text-base leading-7 text-slate-600">
                                    {food.origin_and_popularity}
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-3xl bg-slate-950 p-5 text-white">
                                <p className="text-sm text-slate-300">Price</p>
                                <p className="mt-2 text-3xl font-semibold">BDT {food.price}</p>
                            </div>
                            <div className="rounded-3xl bg-emerald-100 p-5">
                                <p className="text-sm text-emerald-700">Cuisine</p>
                                <p className="mt-2 text-lg font-semibold text-emerald-950">{food.cuisine}</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {food.alternative_names?.map((name) => (
                                <span
                                    key={name}
                                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                                >
                                    {name}
                                </span>
                            ))}
                        </div>

                        <div className="grid gap-3 sm:grid-cols-3">
                            <div className="rounded-2xl bg-amber-50 p-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">
                                    Home cooked
                                </p>
                                <p className="mt-2 text-sm font-medium text-slate-800">{priceInfo.home_cooked}</p>
                            </div>
                            <div className="rounded-2xl bg-orange-50 p-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
                                    Street price
                                </p>
                                <p className="mt-2 text-sm font-medium text-slate-800">
                                    {priceInfo.street_food_or_small_restaurant || priceInfo.street_food_or_small_cafe}
                                </p>
                            </div>
                            <div className="rounded-2xl bg-rose-50 p-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
                                    Cafe price
                                </p>
                                <p className="mt-2 text-sm font-medium text-slate-800">
                                    {priceInfo.cafe_or_healthy_eatery ||
                                        priceInfo.cafe_or_fast_food_chain ||
                                        priceInfo.cafe_or_specialty_restaurant}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-[0_24px_60px_rgba(120,53,15,0.10)]">
                        <div className="space-y-5">
                            <div>
                                <p className="text-sm font-medium text-slate-500">Nutrition overview</p>
                                <h2 className="mt-1 text-2xl font-semibold text-slate-950">Per serving details</h2>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-2">
                                <div className="rounded-2xl bg-amber-50 p-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">Calories</p>
                                    <p className="mt-2 text-sm font-medium text-slate-800">{nutrition.calories}</p>
                                </div>
                                <div className="rounded-2xl bg-emerald-50 p-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500">Protein</p>
                                    <p className="mt-2 text-sm font-medium text-slate-800">{nutrition.protein}</p>
                                </div>
                                <div className="rounded-2xl bg-sky-50 p-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">Carbs</p>
                                    <p className="mt-2 text-sm font-medium text-slate-800">{nutrition.carbohydrates}</p>
                                </div>
                                <div className="rounded-2xl bg-rose-50 p-4">
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">Fat</p>
                                    <p className="mt-2 text-sm font-medium text-slate-800">{nutrition.fat}</p>
                                </div>
                                <div className="rounded-2xl bg-violet-50 p-4 sm:col-span-2">
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-500">Fiber</p>
                                    <p className="mt-2 text-sm font-medium text-slate-800">{nutrition.fiber}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-[0_24px_60px_rgba(120,53,15,0.10)]">
                        <div className="space-y-5">
                            <div>
                                <p className="text-sm font-medium text-slate-500">Ingredient list</p>
                                <h2 className="mt-1 text-2xl font-semibold text-slate-950">What goes into it</h2>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {food.main_ingredients?.map((ingredient) => (
                                    <span
                                        key={ingredient}
                                        className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                                    >
                                        {ingredient}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-[0_24px_60px_rgba(120,53,15,0.10)] md:p-8">
                    <div className="space-y-6">
                        <div>
                            <p className="text-sm font-medium text-slate-500">Kitchen guide</p>
                            <h2 className="mt-1 text-2xl font-semibold text-slate-950">Cooking steps</h2>
                        </div>

                        <div className="grid gap-4">
                            {food.cooking_steps?.map((step, index) => (
                                <article
                                    key={step}
                                    className="flex gap-4 rounded-3xl border border-amber-100 bg-amber-50/70 p-4"
                                >
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                                        {index + 1}
                                    </div>
                                    <p className="pt-1 text-sm leading-7 text-slate-700">{step}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default FoodDetailPage;
