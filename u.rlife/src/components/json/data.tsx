export async function getData(params: string) {
    const res = await fetch(params);
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    } else {
        return res.json();
    }
}

export async function getExerciseData() {
    return getData("/exercises.json")
}