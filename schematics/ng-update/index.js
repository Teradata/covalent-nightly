"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
var target_version_1 = require("./target-version");
var green = chalk_1.default.green;
var yellow = chalk_1.default.yellow;
/** Entry point for the migration schematics with target of Covalent v3 */
function updateToV3() {
    return function (tree, _context) {
        _context.logger.info('Running covalent update schematic ...');
        onMigrationComplete(target_version_1.TargetVersion.V3);
        return tree;
    };
}
exports.updateToV3 = updateToV3;
/** Function that will be called when the migration completed. */
function onMigrationComplete(targetVersion) {
    // tslint:disable-next-line
    console.log();
    // tslint:disable-next-line
    console.log(green("  \u2713  Updated Covalent to " + targetVersion));
    // tslint:disable-next-line
    console.log();
    // tslint:disable-next-line
    console.log(yellow('  ⚠  Breaking changes are not applied automatically! Please refer the docs' +
        '(https://github.com/Teradata/covalent/wiki) and fix the issues manually'));
}
//# sourceMappingURL=index.js.map