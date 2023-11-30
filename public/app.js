document.addEventListener('DOMContentLoaded', function () {
    const fileListContainer = document.getElementById('file-list');

    // You would fetch this data from your server
    const mockData = [
        { type: 'pdf', name: 'Sample PDF', path: '/path/sample.pdf' },
        { type: 'pdf', name: 'Sample1 PDF', path: '/path/sample1.pdf' },
        { type: 'image', name: 'Sample Image', path: '/path/sample.jpg' },
        // Add more data as needed
    ];

    mockData.forEach(item => {
        const fileItem = document.createElement('div');
        fileItem.classList.add('file-item');

        if (item.type === 'pdf') {
            const pdfEmbed = document.createElement('iframe');
            pdfEmbed.src = item.path;
            pdfEmbed.style.width = '100%';
            pdfEmbed.style.height = '500px';
            fileItem.appendChild(pdfEmbed);
        } else if (item.type === 'image') {
            const img = document.createElement('img');
            img.src = item.path;
            fileItem.appendChild(img);
        }

        const fileName = document.createElement('span');
        fileName.textContent = item.name;

        fileItem.appendChild(fileName);
        fileListContainer.appendChild(fileItem);
    });
});
