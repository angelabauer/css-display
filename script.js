const blockHeightSlider = document.getElementById("block-height-slider");
const blockWidthSlider = document.getElementById("block-width-slider");

const inlineHeightSlider = document.getElementById("inline-height-slider");
const inlineWidthSlider = document.getElementById("inline-width-slider");

const inlineBlockHeightSlider = document.getElementById(
  "inline-block-height-slider"
);
const inlineBlockWidthSlider = document.getElementById(
  "inline-block-width-slider"
);

const blockHeightOutput = document.getElementById("block-height-output");
const blockWidthOutput = document.getElementById("block-width-output");

const inlineHeightOutput = document.getElementById("inline-height-output");
const inlineWidthOutput = document.getElementById("inline-width-output");

const inlineBlockHeightOutput = document.getElementById(
  "inline-block-height-output"
);
const inlineBlockWidthOutput = document.getElementById(
  "inline-block-width-output"
);

const blockElement = document.querySelector(".block");
const inlineElement = document.querySelector(".inline");
const inlineBlockElement = document.querySelector(".inline-block");

blockHeightSlider.addEventListener("input", () => {
  const heightValue = blockHeightSlider.value + "px";
  blockElement.style.height = heightValue;
  blockHeightOutput.textContent = blockHeightSlider.value;
});

blockWidthSlider.addEventListener("input", () => {
  const widthValue = blockWidthSlider.value + "px";
  blockElement.style.width = widthValue;
  blockWidthOutput.textContent = blockWidthSlider.value;
});

inlineHeightSlider.addEventListener("input", () => {
  const heightValue = inlineHeightSlider.value + "px";
  inlineElement.style.height = heightValue;
  inlineHeightOutput.textContent = inlineHeightSlider.value;
});

inlineWidthSlider.addEventListener("input", () => {
  const widthValue = inlineWidthSlider.value + "px";
  inlineElement.style.width = widthValue;
  inlineWidthOutput.textContent = inlineWidthSlider.value;
});

inlineBlockHeightSlider.addEventListener("input", () => {
  const heightValue = inlineBlockHeightSlider.value + "px";
  inlineBlockElement.style.height = heightValue;
  inlineBlockHeightOutput.textContent = inlineBlockHeightSlider.value;
});

inlineBlockWidthSlider.addEventListener("input", () => {
  const widthValue = inlineBlockWidthSlider.value + "px";
  inlineBlockElement.style.width = widthValue;
  inlineBlockWidthOutput.textContent = inlineBlockWidthSlider.value;
});
