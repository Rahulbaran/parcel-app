const workLabel = document.querySelector(".work span");

// * Functions
export const fetchWork = async (type = "music") => {
  try {
    const response = await fetch(`/.netlify/functions/fetch-data?type=${type}`);
    const data = await response.json();

    workLabel.textContent = data.activity;
  } catch (error) {
    workLabel.classList.add("work-error");
  }
};
