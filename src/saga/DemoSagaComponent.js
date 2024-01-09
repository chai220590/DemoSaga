import React, { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { DemoActions, DemoSelectors } from "./demo.slice";
import Text from "../components/Text";
import Input from "../components/Input";

function DemoSagaComponent() {
    const dispatch = useDispatch();
    const isCall = useSelector(DemoSelectors.isCall);
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [result, setResult] = useState([]);

    const onClickTakeLatest = ({ action = "" }) => {
        dispatch(
            DemoActions.demoTakeLatest({
                action,
                onSuccess: (rs) => {
                    setResult([rs, ...result]);
                },
            })
        );
    };

    const onClickTakeLeading = ({ action = "" }) => {
        dispatch(
            DemoActions.demoTakeLeading({
                action,
                onSuccess: (rs) => {
                    setResult([rs, ...result]);
                },
            })
        );
    };

    return (
        <div className={"m-2 mt-5"}>
            <div className="mb-1">
                <Text className="text-lg font-bold">Clicking</Text>
            </div>
            <Card>
                <div className="mb-5">
                    <Button onClick={() => onClickTakeLatest({
                        action: "click Latest"
                    })}>Take Latest</Button>
                </div>
                <div className="mb-5">
                    <Button onClick={() => onClickTakeLeading({
                        action: "click Leading"
                    })}>Take Leading</Button>
                </div>
                <div className="mt-5">
                    <Text>Saga is {isCall ? "calling" : "waiting"}...</Text>
                </div>
            </Card>
            <div className="mb-1 mt-5">
                <Text className="text-lg font-bold">Inputing</Text>
            </div>
            <Card>
                <div className="mb-5">
                    <Input isLoading={isCall}
                        onChange={(e) => setValue1(e.target.value)}
                        value={value1}
                        placeholder="Input for Take Latest"
                        onKeyUp={(event) => {
                            onClickTakeLatest({
                                action: `Search Latest "${value1}"`,
                            });
                        }}
                    />
                </div>
                <div className="mb-1">
                    <Input isLoading={isCall}
                        onChange={(e) => setValue2(e.target.value)}
                        value={value2}
                        placeholder="Input for Take Leading"
                        onKeyUp={(event) => {
                            if (value2.length > 0) {
                                onClickTakeLeading({
                                    action: `Search Leading "${value2}"`,
                                });
                            }
                        }}
                    />
                </div>
            </Card>

            <div className="mb-1 mt-5">
                <Text className="text-lg font-bold">Result</Text>
            </div>
            <Card className="h-[300px] overflow-auto">
                <div>
                    {result.map((item, index) => {
                        return (
                            <div key={index} style={{
                                overflowWrap: "break-word"
                            }} className="mb-2 bg-[#ffffff10] p-2 rounded-md overflow-hide">
                                <Text>{item}</Text>
                            </div>
                        );
                    })}
                </div>
            </Card>
        </div>
    );
}

export default DemoSagaComponent;
