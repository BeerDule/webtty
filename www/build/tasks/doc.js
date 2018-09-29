/**
 * Gulp tasks for producing documentation.
 */
const del = require("del");
const deleteEmpty = require("delete-empty");
const gulp = require("gulp");
const path = require("path");
const runSequence = require("run-sequence");
const util = require("util");
const display = require("./util/display");
const uc = require("./util/unite-config");
require("./doc-generate");
gulp.task("doc-clean", async () => {
    const uniteConfig = await uc.getUniteConfig();
    const docFolder = path.join("../", uniteConfig.dirs.docsRoot);
    const toClean = [
        path.join(docFolder, "**/*")
    ];
    display.info("Cleaning", toClean);
    try {
        await del(toClean, {
            force: true
        });
        await util.promisify(deleteEmpty)(docFolder, {
            verbose: false
        });
    } catch (err) {
        display.error(err);
        process.exit(1);
    }
});
gulp.task("doc-build", async () => {
    try {
        await util.promisify(runSequence)("doc-clean", "doc-generate");
    } catch (err) {
        display.error("Unhandled error during task", err);
        process.exit(1);
    }
});
// Generated by UniteJS
