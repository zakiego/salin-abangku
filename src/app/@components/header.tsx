"use client";

import { Menu, Group, Center, Burger, Container, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./header.module.css";
import { BiChevronDown } from "react-icons/bi";
import Link from "next/link";
import { ActionIcon } from "@mantine/core";
import Image from "next/image";

export function Header() {
	return (
		<header className={classes.header}>
			<Container size="xs">
				<div className={classes.inner}>
					<Title
						size="h4"
						style={{
							textAlign: "center",
						}}
					>
						Salin Abangkuuuhh 🫡🔥🔝
					</Title>

					<ActionIcon
						variant="subtle"
						color="gray"
						component="a"
						href="https://github.com/zakiego/salin-abangku"
					>
						<Image src="/github.svg" alt="GitHub" width={16} height={16} />
					</ActionIcon>
				</div>
			</Container>
		</header>
	);
}
