"use client";

import { Menu, Group, Center, Burger, Container, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./header.module.css";
import { BiChevronDown } from "react-icons/bi";
import Link from "next/link";

const links = [
	{ link: "/about", label: "Features" },
	{
		link: "#1",
		label: "Learn",
		links: [
			{ link: "/docs", label: "Documentation" },
			{ link: "/resources", label: "Resources" },
			{ link: "/community", label: "Community" },
			{ link: "/blog", label: "Blog" },
		],
	},
	{ link: "/about", label: "About" },
	{ link: "/pricing", label: "Pricing" },
	{
		link: "#2",
		label: "Support",
		links: [
			{ link: "/faq", label: "FAQ" },
			{ link: "/demo", label: "Book a demo" },
			{ link: "/forums", label: "Forums" },
		],
	},
];

export function Header() {
	const [opened, { toggle }] = useDisclosure(false);

	const items = links.map((link) => {
		return (
			<Link key={link.label} href={link.link} className={classes.link}>
				{link.label}
			</Link>
		);
	});

	return (
		<header className={classes.header}>
			<Container size="md">
				<div className={classes.inner}>
					<Title
						size="h5"
						style={{
							textAlign: "center",
						}}
					>
						Salin Abangkuuuhh 🫡🔥🔝
					</Title>
					<Group gap={5} visibleFrom="sm">
						{items}
					</Group>
					<Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
				</div>
			</Container>
		</header>
	);
}
