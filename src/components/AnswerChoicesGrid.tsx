"use client";

// import { Button } from "./ui/button";
// import Image from "next/image";
import AnswerChoice from "./AnswerChoice";

interface AnswerChoicesGridProps {
	choices: string[];
	selectedAnswer: number;
	setSelectedAnswer: (choice: number) => void;
}

export default function AnswerChoicesGrid({
	choices,
	selectedAnswer,
	setSelectedAnswer,
}: AnswerChoicesGridProps) {
	return (
		<div className="w-fit h-fit gap-4 grid grid-cols-2">
			{choices.map((choice, index) => (
				<AnswerChoice
					key={choice}
					filename={choice}
					selectedAnswer={selectedAnswer}
					onSelect={() => {
						setSelectedAnswer(index);
					}}
					index={index}
				/>
			))}
		</div>
	);
}
