/*
 * Copyright (c) 2017, Oracle and/or its affiliates. All rights reserved.
 *
 * MySQL Connector/Node.js is licensed under the terms of the GPLv2
 * <http://www.gnu.org/licenses/old-licenses/gpl-2.0.html>, like most
 * MySQL Connectors. There are special exceptions to the terms and
 * conditions of the GPLv2 as it is applied to this software, see the
 * FLOSS License Exception
 * <http://www.mysql.com/about/legal/licensing/foss-exception.html>
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation; version 2 of the
 * License.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 * 02110-1301  USA
 */

'use strict';

/**
 * Projecting mixin.
 * @mixin
 * @private
 * @alias Projecting
 * @param {Object} state - projecting properties
 * @returns {Projecting}
 */
function Projecting (state) {
    state = Object.assign({ projections: [] }, state);

    return {
        /**
         * Retrieve the list of columns to project in the result.
         * @function
         * @private
         * @name Projecting#getProjections
         * @returns {string[]} The list of projection expressions.
         */
        getProjections () {
            return state.projections;
        },

        /**
         * Set the list of columns to project in the result.
         * @function
         * @private
         * @name Projecting#setProjectings
         * @param {string[]} projections - list of projection expressions.
         * @returns {Projecting} The query instance.
         */
        setProjections (projections) {
            state.projections = projections;

            return this;
        }
    };
}

module.exports = Projecting;