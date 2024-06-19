document.addEventListener('DOMContentLoaded', () => {
    const steps = document.querySelectorAll('.step');
    const progressBar = document.getElementById('progress-bar');

    function updateProgress(currentStep) {
        steps.forEach((step, index) => {
            if (index < currentStep) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });

        const width = ((currentStep - 1) / (steps.length - 1)) * 100;
        progressBar.style.width = width + '%';
    }

    function simulateProgress() {
        let currentStep = 1;
        updateProgress(currentStep);

        const interval = setInterval(() => {
            currentStep++;
            updateProgress(currentStep);

            if (currentStep > steps.length-1) {
                clearInterval(interval);
            }
        }, 4320); // Update every 3 seconds for demonstration
    }

    simulateProgress();
});
