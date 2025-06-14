function drawTowers(towers, step) {
    console.log("\nШаг " + step + ":");
    var maxHeight = Math.max(towers[0].length, towers[1].length, towers[2].length);
    for (var level = maxHeight - 1; level >= 0; level--) {
        var line = towers.map(function (rod) {
            var disk = rod[level];
            return disk
                ? "●".repeat(disk * 2 - 1).padStart(3, ' ').padEnd(5, ' ')
                : "  |  ";
        }).join(" ");
        console.log(line);
    }

    console.log(" [A]   [B]   [C] ");
}

function moveTower(n, from, aux, to, towers, step) {
    if (n === 1) {
        var disk = towers[from].pop();
        towers[to].push(disk);
        step.count++;
        drawTowers(towers, step.count);
        return;
    }
    moveTower(n - 1, from, to, aux, towers, step);
    moveTower(1, from, aux, to, towers, step);
    moveTower(n - 1, aux, from, to, towers, step);
}

// Инициализация
var n = 5;
var towers = [[], [], []]; // A, B, C
for (var i = n; i >= 1; i--) towers[0].push(i);
console.log(`\nБашни Ханоя для ${n} дисков:`);
drawTowers(towers, 0);
moveTower(n, 0, 1, 2, towers, { count: 0 });
