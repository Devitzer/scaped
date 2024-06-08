interface DiagnosticFormattedNumber {
    time: number,
    format: "s" | "ms"
}

function diagnosticFormat(milliseconds: number): DiagnosticFormattedNumber {
    if (milliseconds >= 1000) {
        return {
            time: milliseconds / 1000,
            format: "s"
        }
    }

    return {
        time: milliseconds,
        format: "ms"
    }
}

export default diagnosticFormat;