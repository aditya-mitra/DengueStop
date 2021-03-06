import FetchApi from "../utils/apiProviderService";
import { getSession } from "./sessionService";

class IncidentService {
    getPendingIncidentsByOrgId(orgId) {
        var apiUrl = "get_pending_incidents_by_org/" + orgId.toString();
        return FetchApi("GET", apiUrl)
            .then((res) => {
                if (res.status === 200) {
                    return res.data;
                }
                return null;
            })
            .catch((err) => {
                console.log("error : ", err);
                throw err;
            });
    }

    verifyIncident(incident_id, verified_admin_id) {
        var apiUrl =
            "verify_incident/" +
            incident_id.toString() +
            "/" +
            verified_admin_id.toString();
        return FetchApi("GET", apiUrl)
            .then((res) => {
                if (res.status === 200) {
                    return true;
                }
                return false;
            })
            .catch((err) => {
                console.log("error : ", err);
                throw err;
            });
    }

    declineIncident(incident_id, verified_admin_id) {
        var apiUrl =
            "decline_incident/" +
            incident_id.toString() +
            "/" +
            verified_admin_id.toString();
        return FetchApi("GET", apiUrl)
            .then((res) => {
                if (res.status === 200) {
                    return true;
                }
                return false;
            })
            .catch((err) => {
                console.log("error : ", err);
                throw err;
            });
    }

    getTotalIncidentSummary() {
        var apiUrl = "get_total_incident_summary";
        return FetchApi("GET", apiUrl)
            .then((res) => {
                if (res.status === 200) {
                    return res.data;
                }
                return null;
            })
            .catch((err) => {
                console.log("error : ", err);
                throw err;
            });
    }

    getIncidentMarkers(province) {
        var apiUrl = "get_incident_markers_by_province/" + province.toString();
        return FetchApi("GET", apiUrl)
            .then((res) => {
                if (res.status === 200) {
                    return res.data;
                }
                return null;
            })
            .catch((err) => {
                console.log("error : ", err);
                throw err;
            });
    }

    queryIncidents(patientName, province, status, dateRange) {
        var apiUrl = "query_incidents";
        const currentUser = getSession();
        var orgId = currentUser.org_id;
        var data = {
            orgId: orgId,
            patientName: patientName,
            province: province,
            status: status,
            dateRange: dateRange,
        };
        return FetchApi("POST", apiUrl, data)
            .then((res) => {
                if (res.status === 200) {
                    return res.data;
                }
                return null;
            })
            .catch((err) => {
                console.log("error : ", err);
                throw err;
            });
    }

    updatePatientStatus(incidentId, newStatus) {
        var apiUrl =
            "update_patient_status/" +
            incidentId.toString() +
            "/" +
            newStatus.toString();
        return FetchApi("GET", apiUrl)
            .then((res) => {
                if (res.status === 200) {
                    return true;
                }
                return false;
            })
            .catch((err) => {
                console.log("error : ", err);
                throw err;
            });
    }

    getMonthlyIncidentCount(orgId) {
        var apiUrl = "get_monthly_incident_count/" + orgId.toString();
        return FetchApi("GET", apiUrl)
            .then((res) => {
                if (res.status === 200) {
                    return res.data;
                }
                return null;
            })
            .catch((err) => {
                console.log("error : ", err);
                throw err;
            });
    }

    getIncidentAgeGroupCount(orgId, dateRange) {
        var apiUrl =
            "get_incident_age_group_count/" +
            orgId.toString() +
            "/" +
            dateRange.toString();
        return FetchApi("GET", apiUrl)
            .then((res) => {
                if (res.status === 200) {
                    return res.data;
                }
                return null;
            })
            .catch((err) => {
                console.log("error : ", err);
                throw err;
            });
    }

    getIncidentStatusCount(orgId, dateRange) {
        var apiUrl =
            "get_incident_status_count/" +
            orgId.toString() +
            "/" +
            dateRange.toString();
        return FetchApi("GET", apiUrl)
            .then((res) => {
                if (res.status === 200) {
                    return res.data;
                }
                return null;
            })
            .catch((err) => {
                console.log("error : ", err);
                throw err;
            });
    }

    getIncidentVerificationBreakdown(orgId, dateRange) {
        var apiUrl =
            "get_incident_verification_breakdown/" +
            orgId.toString() +
            "/" +
            dateRange.toString();
        return FetchApi("GET", apiUrl)
            .then((res) => {
                if (res.status === 200) {
                    return res.data;
                }
                return null;
            })
            .catch((err) => {
                console.log("error : ", err);
                throw err;
            });
    }

    getProvinceVsStatusCount(dateRange) {
        var apiUrl = "get_province_vs_status_count/" + dateRange.toString();
        return FetchApi("GET", apiUrl)
            .then((res) => {
                if (res.status === 200) {
                    return res.data;
                }
                return null;
            })
            .catch((err) => {
                console.log("error : ", err);
                throw err;
            });
    }
}

export default IncidentService;
