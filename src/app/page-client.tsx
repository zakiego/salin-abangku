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
	"Kelas abangda 🔥🫡",
];

const successToastEN = [
	"Copied my brother 🔥🔥",
	"It's been copied, brother 🤝🏼",
	"Copied, top captain 👍🏼👍🏼",
	"Successfully copied 🙌🏼🙌🏼",
	"Copied, courtesy of my brother 🔥🔥💯🔝",
	"Brother class 🔥🫡",
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

	const template = isIndonesian ? templatesID : templatesEN;

	const copied = () => {
		const successToast = isIndonesian ? successToastID : successToastEN;
		toast.success(
			successToast[Math.floor(Math.random() * successToast.length)],
		);
	};

	const getRandomText = () => {
		const getRandom = template[Math.floor(Math.random()*template.length)];
		clipboard.copy(getRandom);
		toast.success(getRandom)
	}

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
				{template.map((i) => (
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

			<Flex
				mb="lg"
				pos="fixed"
				bottom="0"
				justify="center"
				left="0"
				right="0"
				style={{
					textAlign: "center",
				}}
			>
				<Button
					onClick={() => {
						clipboard.copy(template.join("\n"));
						copied();
					}}
					radius="md"
					color="teal.9"
				>
					Salin Semua 🤙🏻
				</Button>
				<ActionIcon
					onClick={ getRandomText }
					radius="md"
					size="lg"
					color="teal.9"
					ml="xs"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ height: '20px' }} fill="#fff">
						<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm64 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM96 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM224 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64-64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
					</svg>
				</ActionIcon>
			</Flex>
		</Container>
	);
}
