'use client';

import Link from 'next/link';
import { useEffect } from 'react';

const ErrorPage = ({ error, unstable_retry }) => {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className="flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,_#fff7ed_0%,_#fffaf3_45%,_#fed7aa_100%)] px-4 py-10 text-slate-900 sm:px-6">
            <section className="w-full max-w-2xl rounded-[2rem] border border-amber-200/70 bg-white/90 p-8 text-center shadow-[0_30px_80px_rgba(120,53,15,0.12)] backdrop-blur md:p-10">
                <span className="inline-flex rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-700">
                    Food page error
                </span>

                <div className="mt-6 space-y-4">
                    <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                        Something went wrong while serving this menu.
                    </h1>
                    <p className="mx-auto max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                        The food data could not be loaded right now. This can happen because of a temporary
                        network issue or an unexpected runtime problem.
                    </p>
                </div>

                <div className="mt-8 grid gap-4 rounded-3xl bg-amber-50 p-5 text-left sm:grid-cols-2">
                    <div className="rounded-2xl bg-white p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">
                            Status
                        </p>
                        <p className="mt-2 text-sm font-medium text-slate-800">
                            Unable to load foods section
                        </p>
                    </div>
                    <div className="rounded-2xl bg-white p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">
                            Error code
                        </p>
                        <p className="mt-2 break-all text-sm font-medium text-slate-800">
                            {error?.digest || 'No digest available'}
                        </p>
                    </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <button
                        type="button"
                        onClick={() => unstable_retry()}
                        className="rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                        Try again
                    </button>
                    <Link
                        href="/foods"
                        className="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-amber-300 hover:bg-amber-50 hover:text-amber-800"
                    >
                        Back to foods
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default ErrorPage;
