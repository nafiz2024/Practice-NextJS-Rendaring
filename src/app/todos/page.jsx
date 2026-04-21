
const ToDosPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await res.json();

    const completedTodos = todos.filter((todo) => todo.completed);
    const pendingTodos = todos.filter((todo) => !todo.completed);
    const featuredTodos = todos.slice(0, 6);

    return (
        <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#e0f2fe_0%,_#f8fafc_35%,_#eef2ff_100%)] px-4 py-10 text-slate-900 sm:px-6 lg:px-8">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
                <section className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.10)] backdrop-blur md:p-8">
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                        <div className="max-w-2xl space-y-4">
                            <span className="inline-flex w-fit items-center rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700">
                                Todo command center
                            </span>
                            <div className="space-y-3">
                                <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                                    Stay on top of every task with a cleaner, calmer workflow.
                                </h1>
                                <p className="max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
                                    Live todos from the API, organized into clear sections so you can scan what is done,
                                    what is pending, and what deserves attention first.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:min-w-[420px]">
                            <div className="rounded-3xl bg-slate-950 p-5 text-white shadow-lg">
                                <p className="text-sm text-slate-300">Total tasks</p>
                                <p className="mt-3 text-3xl font-semibold">{todos.length}</p>
                            </div>
                            <div className="rounded-3xl bg-emerald-100 p-5 shadow-sm">
                                <p className="text-sm text-emerald-700">Completed</p>
                                <p className="mt-3 text-3xl font-semibold text-emerald-950">{completedTodos.length}</p>
                            </div>
                            <div className="rounded-3xl bg-amber-100 p-5 shadow-sm">
                                <p className="text-sm text-amber-700">Pending</p>
                                <p className="mt-3 text-3xl font-semibold text-amber-950">{pendingTodos.length}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grid gap-6 xl:grid-cols-[1.1fr_1.9fr]">
                    <div className="rounded-[2rem] border border-slate-200/70 bg-white/85 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-500">Featured now</p>
                                <h2 className="mt-1 text-2xl font-semibold text-slate-950">Priority snapshot</h2>
                            </div>
                            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                                First 6 todos
                            </span>
                        </div>

                        <div className="mt-6 space-y-4">
                            {featuredTodos.map((todo) => (
                                <article
                                    key={todo.id}
                                    className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4 transition hover:-translate-y-0.5 hover:bg-white"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
                                                Task #{todo.id}
                                            </p>
                                            <h3 className="mt-2 text-base font-semibold capitalize text-slate-900">
                                                {todo.title}
                                            </h3>
                                        </div>
                                        <span
                                            className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                                                todo.completed
                                                    ? 'bg-emerald-100 text-emerald-700'
                                                    : 'bg-amber-100 text-amber-700'
                                            }`}
                                        >
                                            {todo.completed ? 'Done' : 'In progress'}
                                        </span>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-2">
                        <section className="rounded-[2rem] border border-amber-200/70 bg-white/85 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
                            <div className="flex items-center justify-between gap-3">
                                <div>
                                    <p className="text-sm font-medium text-amber-600">Need attention</p>
                                    <h2 className="mt-1 text-2xl font-semibold text-slate-950">Pending tasks</h2>
                                </div>
                                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                                    {pendingTodos.length} open
                                </span>
                            </div>

                            <div className="mt-6 max-h-[38rem] space-y-3 overflow-y-auto pr-1">
                                {pendingTodos.map((todo) => (
                                    <article
                                        key={todo.id}
                                        className="rounded-2xl border border-amber-100 bg-amber-50/70 p-4"
                                    >
                                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">
                                            Todo #{todo.id}
                                        </p>
                                        <h3 className="mt-2 text-sm font-medium capitalize leading-6 text-slate-800">
                                            {todo.title}
                                        </h3>
                                    </article>
                                ))}
                            </div>
                        </section>

                        <section className="rounded-[2rem] border border-emerald-200/70 bg-white/85 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
                            <div className="flex items-center justify-between gap-3">
                                <div>
                                    <p className="text-sm font-medium text-emerald-600">Wrapped up</p>
                                    <h2 className="mt-1 text-2xl font-semibold text-slate-950">Completed tasks</h2>
                                </div>
                                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                                    {completedTodos.length} done
                                </span>
                            </div>

                            <div className="mt-6 max-h-[38rem] space-y-3 overflow-y-auto pr-1">
                                {completedTodos.map((todo) => (
                                    <article
                                        key={todo.id}
                                        className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4"
                                    >
                                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-500">
                                            Todo #{todo.id}
                                        </p>
                                        <h3 className="mt-2 text-sm font-medium capitalize leading-6 text-slate-800">
                                            {todo.title}
                                        </h3>
                                    </article>
                                ))}
                            </div>
                        </section>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default ToDosPage;
