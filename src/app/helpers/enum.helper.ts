export function ToArray(enumme: any) {
    return Object.keys(enumme)
        .filter(f => !isNaN(parseInt(f)))
        .map(key => enumme[key]);
}

