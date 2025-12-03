function sum(a, b) {
    return a + b;
}

// Export pour Node (Jest)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { sum };
}

// Export pour le navigateur (window.sum)
if (typeof window !== 'undefined') {
    window.sum = sum;
}
