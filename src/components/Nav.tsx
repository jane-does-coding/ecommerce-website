"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, ReactNode } from "react";

export function Nav({ children }: { children: ReactNode }) {
	return (
		<nav className="bg-neutral-700 text-white flex justify-center px-4">
			{children}
		</nav>
	);
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
	const pathname = usePathname();
	return (
		<Link
			{...props}
			className={cn(
				"p-4 hover:bg-secondary hover:text-secondary-foreground transition focus-visible:bg-secondary focus-visible:text-secondary-foreground",
				pathname === props.href && "bg-background text-foreground"
			)}
		/>
	);
}
