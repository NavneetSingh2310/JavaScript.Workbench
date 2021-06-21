function Execute(code) {
    try {
        eval(code);
    }
    catch (e) {
        Microsoft.Dynamics.NAV.InvokeExtensibilityMethod('Error', [e.toString()]);
    }
}
function show(data) {
    Microsoft.Dynamics.NAV.InvokeExtensibilityMethod('Error', [data.toString()]);

}
