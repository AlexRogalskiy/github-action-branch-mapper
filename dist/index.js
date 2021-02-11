module.exports = (() => {
  'use strict';
  var e = {
    932: (e, t, r) => {
      r.r(t);
      var n = r(186);
      var o = r.n(n);
      var s = r(408);
      var i = r.n(s);
      e = r.hmd(e);
      async function run() {
        try {
          const e = o().getInput('github-ref', { required: true });
          let t = o().getInput('map');
          if (t) {
            t = JSON.parse(t);
          }
          let r = i()(e, t);
          if (!r) {
            throw new Error('Could not parse environment name');
          }
          o().setOutput('environment', r);
        } catch (e) {
          o().setFailed(e.message);
        }
      }
      e.exports = run;
      if (r.c[r.s] === e) {
        run().then(e => console.log('Done!'));
      }
    },
    351: function (e, t, r) {
      var n =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (e != null) for (var r in e) if (Object.hasOwnProperty.call(e, r)) t[r] = e[r];
          t['default'] = e;
          return t;
        };
      Object.defineProperty(t, '__esModule', { value: true });
      const o = n(r(87));
      const s = r(278);
      function issueCommand(e, t, r) {
        const n = new Command(e, t, r);
        process.stdout.write(n.toString() + o.EOL);
      }
      t.issueCommand = issueCommand;
      function issue(e, t = '') {
        issueCommand(e, {}, t);
      }
      t.issue = issue;
      const i = '::';
      class Command {
        constructor(e, t, r) {
          if (!e) {
            e = 'missing.command';
          }
          this.command = e;
          this.properties = t;
          this.message = r;
        }
        toString() {
          let e = i + this.command;
          if (this.properties && Object.keys(this.properties).length > 0) {
            e += ' ';
            let t = true;
            for (const r in this.properties) {
              if (this.properties.hasOwnProperty(r)) {
                const n = this.properties[r];
                if (n) {
                  if (t) {
                    t = false;
                  } else {
                    e += ',';
                  }
                  e += `${r}=${escapeProperty(n)}`;
                }
              }
            }
          }
          e += `${i}${escapeData(this.message)}`;
          return e;
        }
      }
      function escapeData(e) {
        return s.toCommandValue(e).replace(/%/g, '%25').replace(/\r/g, '%0D').replace(/\n/g, '%0A');
      }
      function escapeProperty(e) {
        return s
          .toCommandValue(e)
          .replace(/%/g, '%25')
          .replace(/\r/g, '%0D')
          .replace(/\n/g, '%0A')
          .replace(/:/g, '%3A')
          .replace(/,/g, '%2C');
      }
    },
    186: function (e, t, r) {
      var n =
        (this && this.__awaiter) ||
        function (e, t, r, n) {
          function adopt(e) {
            return e instanceof r
              ? e
              : new r(function (t) {
                  t(e);
                });
          }
          return new (r || (r = Promise))(function (r, o) {
            function fulfilled(e) {
              try {
                step(n.next(e));
              } catch (e) {
                o(e);
              }
            }
            function rejected(e) {
              try {
                step(n['throw'](e));
              } catch (e) {
                o(e);
              }
            }
            function step(e) {
              e.done ? r(e.value) : adopt(e.value).then(fulfilled, rejected);
            }
            step((n = n.apply(e, t || [])).next());
          });
        };
      var o =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (e != null) for (var r in e) if (Object.hasOwnProperty.call(e, r)) t[r] = e[r];
          t['default'] = e;
          return t;
        };
      Object.defineProperty(t, '__esModule', { value: true });
      const s = r(351);
      const i = r(717);
      const u = r(278);
      const a = o(r(87));
      const c = o(r(622));
      var p;
      (function (e) {
        e[(e['Success'] = 0)] = 'Success';
        e[(e['Failure'] = 1)] = 'Failure';
      })((p = t.ExitCode || (t.ExitCode = {})));
      function exportVariable(e, t) {
        const r = u.toCommandValue(t);
        process.env[e] = r;
        const n = process.env['GITHUB_ENV'] || '';
        if (n) {
          const t = '_GitHubActionsFileCommandDelimeter_';
          const n = `${e}<<${t}${a.EOL}${r}${a.EOL}${t}`;
          i.issueCommand('ENV', n);
        } else {
          s.issueCommand('set-env', { name: e }, r);
        }
      }
      t.exportVariable = exportVariable;
      function setSecret(e) {
        s.issueCommand('add-mask', {}, e);
      }
      t.setSecret = setSecret;
      function addPath(e) {
        const t = process.env['GITHUB_PATH'] || '';
        if (t) {
          i.issueCommand('PATH', e);
        } else {
          s.issueCommand('add-path', {}, e);
        }
        process.env['PATH'] = `${e}${c.delimiter}${process.env['PATH']}`;
      }
      t.addPath = addPath;
      function getInput(e, t) {
        const r = process.env[`INPUT_${e.replace(/ /g, '_').toUpperCase()}`] || '';
        if (t && t.required && !r) {
          throw new Error(`Input required and not supplied: ${e}`);
        }
        return r.trim();
      }
      t.getInput = getInput;
      function setOutput(e, t) {
        s.issueCommand('set-output', { name: e }, t);
      }
      t.setOutput = setOutput;
      function setCommandEcho(e) {
        s.issue('echo', e ? 'on' : 'off');
      }
      t.setCommandEcho = setCommandEcho;
      function setFailed(e) {
        process.exitCode = p.Failure;
        error(e);
      }
      t.setFailed = setFailed;
      function isDebug() {
        return process.env['RUNNER_DEBUG'] === '1';
      }
      t.isDebug = isDebug;
      function debug(e) {
        s.issueCommand('debug', {}, e);
      }
      t.debug = debug;
      function error(e) {
        s.issue('error', e instanceof Error ? e.toString() : e);
      }
      t.error = error;
      function warning(e) {
        s.issue('warning', e instanceof Error ? e.toString() : e);
      }
      t.warning = warning;
      function info(e) {
        process.stdout.write(e + a.EOL);
      }
      t.info = info;
      function startGroup(e) {
        s.issue('group', e);
      }
      t.startGroup = startGroup;
      function endGroup() {
        s.issue('endgroup');
      }
      t.endGroup = endGroup;
      function group(e, t) {
        return n(this, void 0, void 0, function* () {
          startGroup(e);
          let r;
          try {
            r = yield t();
          } finally {
            endGroup();
          }
          return r;
        });
      }
      t.group = group;
      function saveState(e, t) {
        s.issueCommand('save-state', { name: e }, t);
      }
      t.saveState = saveState;
      function getState(e) {
        return process.env[`STATE_${e}`] || '';
      }
      t.getState = getState;
    },
    717: function (e, t, r) {
      var n =
        (this && this.__importStar) ||
        function (e) {
          if (e && e.__esModule) return e;
          var t = {};
          if (e != null) for (var r in e) if (Object.hasOwnProperty.call(e, r)) t[r] = e[r];
          t['default'] = e;
          return t;
        };
      Object.defineProperty(t, '__esModule', { value: true });
      const o = n(r(747));
      const s = n(r(87));
      const i = r(278);
      function issueCommand(e, t) {
        const r = process.env[`GITHUB_${e}`];
        if (!r) {
          throw new Error(`Unable to find environment variable for file command ${e}`);
        }
        if (!o.existsSync(r)) {
          throw new Error(`Missing file at path: ${r}`);
        }
        o.appendFileSync(r, `${i.toCommandValue(t)}${s.EOL}`, { encoding: 'utf8' });
      }
      t.issueCommand = issueCommand;
    },
    278: (e, t) => {
      Object.defineProperty(t, '__esModule', { value: true });
      function toCommandValue(e) {
        if (e === null || e === undefined) {
          return '';
        } else if (typeof e === 'string' || e instanceof String) {
          return e;
        }
        return JSON.stringify(e);
      }
      t.toCommandValue = toCommandValue;
    },
    408: e => {
      const t = e => {
        const t = /refs\/(heads|tags)\/(\S*)/;
        const r = e.match(t);
        if (r) {
          return r[2];
        }
      };
      const r = (e, r) => {
        let n = t(e);
        if (r) {
          const e = Object.keys(r).sort().reverse();
          const t = e.find(e => {
            const t = new RegExp(e);
            return t.test(n);
          });
          n = r[t];
        }
        return n;
      };
      e.exports = r;
    },
    747: e => {
      e.exports = require('fs');
    },
    87: e => {
      e.exports = require('os');
    },
    622: e => {
      e.exports = require('path');
    },
  };
  var t = {};
  function __nccwpck_require__(r) {
    if (t[r]) {
      return t[r].exports;
    }
    var n = (t[r] = { id: r, loaded: false, exports: {} });
    var o = true;
    try {
      e[r].call(n.exports, n, n.exports, __nccwpck_require__);
      o = false;
    } finally {
      if (o) delete t[r];
    }
    n.loaded = true;
    return n.exports;
  }
  __nccwpck_require__.c = t;
  (() => {
    __nccwpck_require__.n = e => {
      var t = e && e.__esModule ? () => e['default'] : () => e;
      __nccwpck_require__.d(t, { a: t });
      return t;
    };
  })();
  (() => {
    __nccwpck_require__.d = (e, t) => {
      for (var r in t) {
        if (__nccwpck_require__.o(t, r) && !__nccwpck_require__.o(e, r)) {
          Object.defineProperty(e, r, { enumerable: true, get: t[r] });
        }
      }
    };
  })();
  (() => {
    __nccwpck_require__.hmd = e => {
      e = Object.create(e);
      if (!e.children) e.children = [];
      Object.defineProperty(e, 'exports', {
        enumerable: true,
        set: () => {
          throw new Error(
            'ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + e.id
          );
        },
      });
      return e;
    };
  })();
  (() => {
    __nccwpck_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
  })();
  (() => {
    __nccwpck_require__.r = e => {
      if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' });
      }
      Object.defineProperty(e, '__esModule', { value: true });
    };
  })();
  __nccwpck_require__.ab = __dirname + '/';
  return __nccwpck_require__((__nccwpck_require__.s = 932));
})();
