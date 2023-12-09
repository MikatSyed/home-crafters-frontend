"use client";
import React, { useEffect, useState } from "react";
import {
  Typography,
  Row,
  Col,
  message,
  Skeleton
} from "antd";
import { useServiceQuery } from "@/redux/api/servicesApi";
import Image from "next/image";
import { useTimeSlotsQuery } from "@/redux/api/timeSlot";
import Form from "@/components/Forms/Form";
import { useLoggedUserQuery } from "@/redux/api/userApi";
import {
  useAddBookingMutation,
  useCheckAvailableSlotQuery,
} from "@/redux/api/bookingApi";
import { Dayjs } from "dayjs";
import { Toaster } from "react-hot-toast";
import ReviewPage from "@/components/UI/ReviewPage";
import { useRouter } from "next/navigation";
import {
  FaDollarSign,
  FaMapMarkerAlt,
  FaClock,
  FaInfoCircle,
} from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { Calendar } from "antd";
import moment from "moment";
import Review from "@/components/Review/Review";

type IDProps = {
  params: any;
};

const ServiceDetailsPage = ({ params }: IDProps) => {
  const router = useRouter();

  const { id } = params;
  const currentDate = new Date();
  let formattedDate = currentDate.toISOString().split("T")[0];
  const [selectedSlotId, setSelectedSlotId] = useState(null);
  const [selectedDate, setSelectedDate] = useState<Dayjs | string>();
  console.log(selectedDate);
  if (selectedDate === undefined) {
    setSelectedDate(formattedDate);
  }
  const { data: sData, isLoading: serviceDataLoading } = useServiceQuery(id);
  const { data: slotD, isLoading: slotsLoading } = useTimeSlotsQuery(undefined);
  const { data: loginData } = useLoggedUserQuery(undefined);
  const [addBooking, { isSuccess }] = useAddBookingMutation();
  const { data: checkAvailableSlotData } =
    useCheckAvailableSlotQuery(selectedDate);
  console.log(checkAvailableSlotData);
  const onSubmit = async (data: any) => {
    // if (data?.bookingDate === undefined) {
    //   data.bookingDate = formattedDate;
    // }
    let booking = { ...data };
    booking.bookingDate = selectedDate;
    booking.serviceId = id;
    booking.slotId = selectedSlotId;
    booking.userId = loginData?.data?.id;
    console.log(booking);
    try {
      let res = await addBooking(booking).unwrap();
      console.log(res);
      // message.success(res?.message);
      setSelectedSlotId(null);
      router.push(`/confirmBooking/${res?.data?.id}`);
    } catch (err: any) {
      console.log(err);
      message.error(err.data);
    }
  };
  useEffect(() => {}, [selectedDate, selectedSlotId]);

  const serviceData = sData?.data;
  console.log(serviceData);
  const timeSlot = slotD?.data;
  let existingBookings = checkAvailableSlotData?.data;
  const isSlotBooked = (slotId: any) => {
    console.log(slotId);
    return existingBookings?.some((booking: any) => booking.slotId === slotId);
  };

  const slotOptions = timeSlot?.map((slot: any) => {
    return {
      label: slot?.startTime,
      value: slot?.id,
    };
  });

  const handleDateChange = (date: Dayjs | null, dateString: string) => {
    setSelectedDate(dateString);
    setSelectedSlotId(null);
    // The dateString is already in 'YYYY-MM-DD' format
  };



  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <section className="testimonal " style={{ marginTop: "15px" }}>
        <div className="container">
          {serviceDataLoading ? (
            <Skeleton active />
          ) : (
            <>
              <div
                style={{
                  textAlign:'center'
                }}
              >
                <h1
                  style={{
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: "35px",
                  }}
                >
                  {serviceData?.name}
                </h1>
                <p style={{color:'#27ae60'}}>(Average {serviceData?.averageRating} Rating out of {serviceData?.totalReviews} Reviews)</p>
              </div>

              <Row style={{ marginTop: "20px" }}>
                <Col xs={24} sm={24} lg={12} xl={12}>
                  <div className="service-details-container">
                    <div className="detail-item">
                      <MdCategory />
                      <span className="detail-title"> Category</span>
                      <p>{serviceData?.category?.title}</p>
                    </div>

                    <div className="detail-item">
                      <FaDollarSign />
                      <span className="detail-title"> Price</span>
                      <p>{serviceData?.price}</p>
                    </div>

                    <div className="detail-item">
                      <FaMapMarkerAlt />
                      <span className="detail-title"> Location</span>
                      <p>{serviceData?.location}</p>
                    </div>

                    <div className="detail-item">
                      <FaInfoCircle />
                      <span className="detail-title"> Availability</span>
                      <p>{serviceData?.availbility}</p>
                    </div>

                    <div className="detail-item">
                      <FaClock />
                      <span className="detail-title"> Duration</span>
                      <p>{serviceData?.duration}</p>
                    </div>

                    <div className="detail-item">
                      <FaInfoCircle />
                      <span className="detail-title"> Description</span>
                      <p>{serviceData?.description}</p>
                    </div>
                  </div>
                </Col>
                <Col xs={24} sm={24} lg={12} xl={12}>
                  {serviceData?.serviceImg.map((image: any, index: any) => (
                    <div key={index}>
                      <Image
                        src={image}
                        alt={`Image`}
                        width={516}
                        height={344}
                        className="Service_img"
                      />
                    </div>
                  ))}
                </Col>

                {serviceData.availbility === "available" ? (
                  <>
                    <Form submitHandler={onSubmit}>
                      <Row>
                        <Col xs={24} sm={24} lg={12} xl={12}>
                          <div style={{ marginBottom: "20px" }}>
                            <Typography.Title level={4}>
                              Select A Date
                            </Typography.Title>
                            <Calendar
                              fullscreen={false}
                              onChange={(value) =>
                                handleDateChange(
                                  value,
                                  value.format("YYYY-MM-DD")
                                )
                              }
                              disabledDate={(current) =>
                                current && current < moment().startOf("day")
                              }
                              style={{
                                border: "1px solid #d9d9d9",
                                borderRadius: "4px",
                                padding: "10px",
                              }}
                            />
                          </div>
                        </Col>

                        <Col xs={24} sm={24} lg={12} xl={12}>
                          <div
                            style={{ marginBottom: "20px" }}
                            className="margin-lg"
                          >
                            <Typography.Title level={4}>
                              Slot Time
                            </Typography.Title>
                            {/* <Row gutter={16}>
                            {slotOptions?.map((slot: any) => (
                              <Col key={slot.id} xs={24} lg={8}>
                                <button
                                  style={{
                                    width: "100%",
                                    marginBottom: "10px",
                                    backgroundColor:
                                      selectedSlotId === slot.value
                                        ? "black"
                                        : "",
                                    cursor: isSlotBooked(slot.value)
                                      ? "not-allowed"
                                      : "pointer",
                                    opacity: isSlotBooked(slot.value) ? 0.7 : 1,
                                  }}
                                  onClick={() => setSelectedSlotId(slot.value)}
                                  disabled={isSlotBooked(slot.value)}
                                  className="btn2"
                                >
                                  {slot.label}
                                </button>
                              </Col>
                            ))}
                          </Row> */}
                            <Row gutter={16} style={{ marginTop: "20px" }}>
                              {slotOptions?.map((slot: any) => (
                                <Col key={slot.id} xs={24} lg={8}>
                                  <button
                                    type="button"
                                    className="slotBtn"
                                    style={{
                                      width: "100%",
                                      marginBottom: "10px",
                                      backgroundColor:
                                        selectedSlotId === slot.value
                                          ? "#27ae60"
                                          : "",
                                      color:
                                        selectedSlotId === slot.value
                                          ? "#fff"
                                          : "",
                                      opacity: isSlotBooked(slot.value)
                                        ? 0.3
                                        : 1,
                                      cursor: isSlotBooked(slot.value)
                                        ? "not-allowed"
                                        : "pointer",
                                    }}
                                    onClick={() =>
                                      setSelectedSlotId(slot.value)
                                    }
                                    disabled={isSlotBooked(slot.value)}
                                  >
                                    {slot.label}
                                  </button>
                                </Col>
                              ))}
                            </Row>
                            <Row gutter={16}>
                              <Col>
                                <button
                                  className={`btn4 ${
                                    !selectedSlotId ? "disabledBtn" : ""
                                  }`}
                                  type="submit"
                                  disabled={!selectedSlotId}
                                >
                                  Submit
                                </button>
                              </Col>
                            
                            </Row>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                    <Col>
                    
                        <ReviewPage
                          userId={loginData?.data?.id}
                          serviceId={id}
                        />
                    </Col>
                  </>
                ) : (
                  <> </>
                )}
              </Row>
            </>
          )}
        </div>
      </section>
      <Review serviceId={id}/>
      {/* <ReviewPage userId={loginData?.data?.id} serviceId={id} /> */}
    </>
  );
};

export default ServiceDetailsPage;
