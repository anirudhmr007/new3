document.addEventListener('DOMContentLoaded', () => { // Ensure the DOM is fully loaded before executing the script
    const shareButtons = document.querySelectorAll('.share-button');

    shareButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const fileName = event.target.dataset.filename;
            const filePath = event.target.dataset.filepath;

            // Option 1: Using the Web Share API (modern browser feature)
            if (navigator.share) {
                navigator.share({
                    title: `Share ${fileName} from FileShare Hub`,
                    text: `Check out this file: ${fileName}`,
                    url: `${window.location.origin}/${filePath}` // Creates a shareable URL, assuming the 'files' directory is accessible
                })
                .then(() => console.log('File shared successfully'))
                .catch((error) => console.error('Error sharing:', error));
            } else {
                // Option 2: Fallback for browsers not supporting Web Share API, using a prompt to display the shareable URL.
                const shareableLink = `${window.location.origin}/${filePath}`;
                alert(`Share this file: ${fileName}\n\nLink: ${shareableLink}\n\n(Note: This is a simulated share. In a real application, you'd need a backend to serve the file and generate a temporary, secure shareable link.)`);
            }
        });
    });
});
