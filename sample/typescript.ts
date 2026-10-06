import { readFile } from "fs/promises";

// Shapes that can report their area
interface Shape {
	readonly name: string;
	area(): number;
}

enum Unit { Meters, Feet = 3 }

type Point = { x: number; y?: number };

export class Circle implements Shape {
	static count = 0;
	readonly name = "circle";

	constructor(private radius: number, public unit = Unit.Meters) {
		Circle.count++;
	}

	area(): number { return Math.PI * this.radius ** 2; }
}

const parse = async (path: string, ...rest: unknown[]): Promise<Point | null> => {
	const text = await readFile(path, "utf8");
	const match = /x=(\d+)/i.exec(text);
	return match ? { x: Number(match[1]) } : rest.length > 0 && typeof text === "string" ? null : null;
};
