// 下拉動畫功能
const aboutBtn = document.getElementById('aboutBtn');
const aboutDropdown = document.getElementById('aboutDropdown');

aboutBtn.addEventListener('click', () => {
    aboutDropdown.classList.toggle('show');
});

// 作品集圖片說明功能
function showDescription(descriptionId) {
    document.getElementById('descriptionOverlay').style.display = 'flex';
    document.querySelectorAll('.description-item').forEach(item => {
        item.style.display = 'none';
    });
    document.getElementById(descriptionId).style.display = 'block';
}

function hideDescription() {
    document.getElementById('descriptionOverlay').style.display = 'none';
}
