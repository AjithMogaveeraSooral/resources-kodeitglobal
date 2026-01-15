const resources = [
    { 
        name: "Social Science Jr", 
        url: "https://s3.ap-south-1.amazonaws.com/resources.kodeitglobal.com/SS+Jr_Catalog_Digital+Version.pdf",
        file: "assets/SS Jr_Catalog_Digital Version.pdf"
    },
    { 
        name: "Social Science Sr", 
        url: "https://s3.ap-south-1.amazonaws.com/resources.kodeitglobal.com/SS+Sr_Catalog_Digital+Version.pdf",
        file: "assets/SS Sr_Catalog_Digital Version.pdf"
    },
    { 
        name: "ICT", 
        url: "https://s3.ap-south-1.amazonaws.com/resources.kodeitglobal.com/ICT_Catalog+_Digital+Version.pdf",
        file: "assets/ICT_Catalog _Digital Version.pdf"
    },
    { 
        name: "Kindergarten", 
        url: "https://s3.ap-south-1.amazonaws.com/resources.kodeitglobal.com/KG_Catalog_Digital+Version.pdf", 
        file: "assets/KG_Catalog_Digital Version.pdf"
    }
];

const grid = document.getElementById('resource-grid');

resources.forEach((res, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.animationDelay = `${index * 0.15}s`; 

    const qrDiv = document.createElement('div');
    qrDiv.className = 'qr-placeholder';
    card.appendChild(qrDiv);

    const nameLabel = document.createElement('div');
    nameLabel.className = 'resource-name';
    nameLabel.innerText = res.name;
    card.appendChild(nameLabel);

    const downloadBtn = document.createElement('a');
    downloadBtn.className = 'download-btn';
    downloadBtn.href = res.file;
    downloadBtn.setAttribute('download', res.name); 
    downloadBtn.innerHTML = `
        <svg viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m4-5l5 5 5-5m-5 5V3"></path></svg>
        Download Catalog
    `;
    card.appendChild(downloadBtn);

    grid.appendChild(card);

    new QRCode(qrDiv, {
        text: res.url,
        width: 160,
        height: 160,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
});