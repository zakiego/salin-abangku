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
	Textarea,
} from "@mantine/core";
import { useClipboard } from "@mantine/hooks";
import { useState } from "react";
import { FiClipboard, FiPlus } from "react-icons/fi";
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
	const [customText, setCustomText] = useState<string>("");
	const [isCustom, setIsCustom] = useState<boolean>(false);

	const templates = () => {
		const template = isIndonesian ? templatesID : templatesEN;
		return template;
	};

	const copied = () => {
		const successToast = isIndonesian ? successToastID : successToastEN;
		const index = Math.floor(Math.random() * successToast.length);
		const message = successToast[index];
		toast.dismiss();
		toast.success(message);
	};

	return (
		<Container pt="lg" pb="5rem" size={isCustom ? "md" : "sm"}>
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

				<Flex
					direction={{
						base: "column-reverse",
						md: "row",
					}}
				>
					<Stack pt="lg">
						{templates().map((i) => (
							<Paper
								key={i}
								shadow="xs"
								radius="md"
								px="md"
								py="md"
								onClick={() => {
									if (isCustom) {
										setCustomText(customText.concat(i, " "));
									} else {
										clipboard.copy(i);
										copied();
									}
								}}
								color="gray"
								style={{
									cursor: "pointer",
								}}
							>
								<Flex justify="space-between">
									<Text>{i}</Text>

									<Flex gap="sm">
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

										<Tooltip
											display={isCustom ? "inline-flex" : "none"}
											label="Masukkan"
											onClick={(e) => {
												e.stopPropagation();
												setCustomText(customText.concat(i, " "));
											}}
										>
											<ActionIcon
												display={isCustom ? "inline-flex" : "none"}
												variant="default"
												color="gray"
												size="sm"
												aria-label="Add"
											>
												<FiPlus />
											</ActionIcon>
										</Tooltip>
									</Flex>
								</Flex>
							</Paper>
						))}
					</Stack>
					<Container
						hidden={!isCustom}
						pos="sticky"
						top={10}
						style={{
							alignSelf: "flex-start",
						}}
					>
						<Textarea
							placeholder="Racik kata-katamu disini king 🍳"
							size="xl"
							autosize
							minRows={2}
							cols={80}
							maxRows={8}
							value={customText}
							onChange={(e) => setCustomText(e.target.value)}
						/>
					</Container>
				</Flex>
			</Flex>

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
				<Flex
					gap={{
						base: "xs",
						md: "md",
					}}
					justify="center"
					align="center"
					direction={{
						base: "column",
						sm: "row",
					}}
				>
					<Button
						onClick={() => {
							clipboard.copy(templates().join("\n"));
							copied();
						}}
						radius="md"
						color="teal.9"
						style={{
							maxWidth: "fit-content",
						}}
					>
						Salin Semua 🤙🏻
					</Button>
					<Button
						onClick={() => {
							setIsCustom(!isCustom);
						}}
						radius="md"
						color={isCustom ? "red.9" : "cyan.9"}
						style={{
							maxWidth: "fit-content",
						}}
					>
						Mode Memasak: {isCustom ? "ON 🔥" : "OFF 🌾"}
					</Button>
				</Flex>
			</Box>
		</Container>
	);
}
