"use client";

import {
	ActionIcon,
	Box,
	Button,
	Container,
	Flex,
	Paper,
	Stack,
	Text,
	Title,
	Tooltip,
	Switch,
} from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { useState } from "react";
import { FiClipboard } from "react-icons/fi";
import { Toaster, toast } from "sonner";

const successToastID = [
	"Tercopy abangkuuuhh 🔥🔥",
	"Sudah tercopy abangda 🤝🏼",
	"Tersalin, top kapten 👍🏼👍🏼",
	"Berhasil tercopy 🙌🏼🙌🏼",
	"Tercopy, top abangkuu 🔥🔥💯🔝",
];

const successToastEN = [
	"Copied my brother 🔥🔥",
	"It's been copied, brother 🤝🏼",
	"Copied, top captain 👍🏼👍🏼",
	"Successfully copied 🙌🏼🙌🏼",
	"Copied, courtesy of my brother 🔥🔥💯🔝",
];

const renderIndonesianFlag = (
	<div
		style={{
			fontSize: "1rem",
		}}
	>
		🇮🇩
	</div>
);

const renderBritishFlag = (
	<div
		style={{
			fontSize: "1rem",
		}}
	>
		🇬🇧
	</div>
);

type TPageClientProps = {
	templatesID: string[];
	templatesEN: string[];
};

export default function PageClient({
	templatesID,
	templatesEN,
}: TPageClientProps) {
	const clipboard = useClipboard({ timeout: 500 });
	const [checked, setChecked] = useState<"ID" | "EN">("ID");
	const isIndonesian = checked === "ID";

	const templates = () => {
		const template = isIndonesian ? templatesID : templatesEN;
		return template;
	};

	const copied = () => {
		const successToast = isIndonesian ? successToastID : successToastEN;
		toast.success(
			successToast[Math.floor(Math.random() * successToast.length)],
		);
	};

	return (
		<Container pt="lg" pb="5rem" size="xs">
			<Toaster richColors position="top-center" />
			<Title
				size="h2"
				style={{
					textAlign: "center",
				}}
			>
				Salin Abangkuuuhh 🫡🔥🔝
			</Title>

			<Flex
				p="md"
				gap="sm"
				justify="center"
				align="center"
				direction="column"
				wrap="wrap"
			>
				<Title
					size="h5"
					style={{
						textAlign: "center",
					}}
				>
					Pilih Bahasa Template 🌾🙌🏼🙇‍♂️
				</Title>
				<Switch
					checked={isIndonesian}
					onChange={(event) =>
						event.currentTarget.checked ? setChecked("ID") : setChecked("EN")
					}
					size="md"
					onLabel={renderIndonesianFlag}
					offLabel={renderBritishFlag}
				/>
			</Flex>

			<Stack pt="lg">
				{templates().map((i) => (
					<Paper
						key={i}
						shadow="xs"
						radius="md"
						px="md"
						py="md"
						onClick={() => {
							clipboard.copy(i);
							copied();
						}}
						color="gray"
						style={{
							cursor: "pointer",
						}}
					>
						<Flex justify="space-between">
							<Text>{i}</Text>

							<Tooltip label="Salin">
								<ActionIcon
									variant="default"
									color="gray"
									size="sm"
									aria-label="Copy"
								>
									<FiClipboard />
								</ActionIcon>
							</Tooltip>
						</Flex>
					</Paper>
				))}
			</Stack>

			<Box
				mb="lg"
				pos="fixed"
				bottom="0"
				left="0"
				right="0"
				style={{
					textAlign: "center",
				}}
			>
				<Button
					onClick={() => {
						clipboard.copy(templates().join("\n"));
						copied();
					}}
					radius="md"
					color="teal.9"
				>
					Salin Semua 🤙🏻
				</Button>
			</Box>
		</Container>
	);
}
