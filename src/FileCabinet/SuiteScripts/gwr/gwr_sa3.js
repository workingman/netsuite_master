/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
define(['N/log'],
    /**
 * @param{log} log
 */

    // 20230925-235310
    // 20230926-000024
    // 20230927-003442
    // 20230927-004019
    // 20231027-091019

    /**
      * change 1
      */
    (log) => {
        /**
         * Defines the Suitelet script trigger point.
         * @param {Object} scriptContext
         * @param {ServerRequest} scriptContext.request - Incoming request
         * @param {ServerResponse} scriptContext.response - Suitelet response
         * @since 2015.2
         */
        const onRequest = (scriptContext) => {
            const a = 2
            workflow.get({ name: 'custbody_aw_second_lvl_approval' })
            // 20230912-223153
       }
      /**
        * change 2
        */

        return {onRequest}
});
