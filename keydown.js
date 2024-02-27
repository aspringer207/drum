const playQ = () => document.getElementById("q").play();
const playW = () => document.getElementById("w").play();
const playE = () => document.getElementById("e").play();
const playA = () => document.getElementById("a").play();
const playS = () => document.getElementById("s").play();
const playD = () => document.getElementById("d").play();
const playZ = () => document.getElementById("z").play();
const playX = () => document.getElementById("x").play();
const playC = () => document.getElementById("c").play();

function lowCheck() {
	const keymapT = ["KeyQ", "KeyW", "KeyE"];
	const keymapM = ["KeyA", "KeyS", "KeyD"];
	const keymapB = ["KeyZ", "KeyX", "KeyC"];
	document.addEventListener("keydown", (key) =>
		keymapT.includes(key)
			? highCheckT
			: keymapM.includes(key)
			? highCheckM
			: keymapB.includes(key)
			? highCheckB
			: false
	);
}
function highCheckT() {
	document.addEventListener("keydown", (key) =>
		key.code === "KeyQ"
			? playQ
			: key.code === "KeyW"
			? playW
			: key.code === "KeyE"
			? playE
			: false
	);
}

function highCheckM() {
	document.addEventListener("keydown", (key) =>
		key.code === "KeyA"
			? playA
			: key.code === "KeyS"
			? playS
			: key.code === "KeyD"
			? playD
			: false
	);
}
function highCheckB() {
	document.addEventListener("keydown", (key) =>
		key.code === "KeyZ"
			? playZ
			: key.code === "KeyX"
			? playX
			: key.code === "KeyC"
			? playC
			: false
	);
}
