(function (rt) {
  'use strict';

  /* Here comes the offset declarations */

  function __yieldDebug(npc) {
    return new rt.Baton('debug', { npc: npc });
  }

  function __yieldNewProcess(npc, processName, args) {
    return new rt.Baton('newprocess', {
      npc: npc,
      processName: processName,
      args: args
    });
  }

  function __yieldCallFunction(npc, functionName, args) {
    return new rt.Baton('call', {
      npc: npc,
      functionName: functionName,
      args: args
    })
  }

  var __yieldEnd = new rt.Baton('end');

  return { /* Here come the process and memory maps */ };
});
