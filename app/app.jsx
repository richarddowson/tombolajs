"use strict";

var React = require("react"),
    BingoTicketStrip = require("./components/bingoTicketStrip.jsx"),
    BingoTicketCollection = require("./services/bingoTicketCollection"),
    sampleTicket = "011722475204365360702637497481233455758302154058881928446789061241507324334876840738576186051132437816395663800818206590104559628214294664710935667287132130687703253151692742547985";

var strip = new BingoTicketCollection(sampleTicket);

React.render(<BingoTicketStrip tickets={strip.tickets}/>, document.getElementById("app"));
